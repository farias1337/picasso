const webpack = require('webpack')
const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

// example: /components/Button/Button.tsx
const COMPONENT_DECLARATION_FILE_REGEXP = /components\/(.*)\/\1.tsx$/

const { env } = process

const tsConfigFile = path.join(process.cwd(), './.storybook/tsconfig.json')
const tsLoader = {
  loader: require.resolve('ts-loader'),
  options: {
    configFile: tsConfigFile
  }
}

const SKIP_PATTERN = /node_modules\/@types\/react\/index.d.ts/
const tsDocgenLoader = {
  loader: require.resolve('react-docgen-typescript-loader'),
  options: {
    tsconfigPath: tsConfigFile,
    propFilter: prop => {
      if (prop.description.length === 0) return false

      return !SKIP_PATTERN.test(prop.parent.fileName)
    }
  }
}

const defaultLoaders =
  env.TEST_ENV === 'visual' ? [tsLoader] : [tsLoader, tsDocgenLoader]

module.exports = ({ config }) => {
  config.entry = ['@babel/polyfill', ...config.entry]

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    oneOf: [
      {
        test: COMPONENT_DECLARATION_FILE_REGEXP,
        use: defaultLoaders
      },
      { use: [tsLoader] }
    ]
  })

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    '~': path.resolve(__dirname, '..'),
    '@': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components')
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      TEST_ENV: JSON.stringify(env.TEST_ENV)
    })
  )

  if (env.CACHE) {
    config.plugins.push(new HardSourceWebpackPlugin())
  }

  config.node = {
    fs: 'empty',
    module: 'empty'
  }

  config.optimization.minimizer = []

  return config
}
