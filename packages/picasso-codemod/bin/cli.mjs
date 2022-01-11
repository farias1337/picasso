import path from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import meow from 'meow'
import { execa, execaSync } from 'execa'
import { globbySync } from 'globby'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const require = createRequire(import.meta.url)

const codemodsDirectory = path.join(__dirname, '../', 'src')
const jscodeshift = require.resolve('.bin/jscodeshift')
const paths = {
  spa: 'src/**/*.tsx',
  monorepo: {
    libs: '*libs/*/src/*',
    hosts: '*hosts/*/src/*',
    apps: '*apps/*/src/*',
    namespaceLibs: '*namespaces/*/libs/*/src/*',
    namespaceApps: '*namespaces/*/apps/*/src/*'
  }
}

const findFilesInMonorepo = () =>
  execaSync(
    'find',
    [
      '.',
      '-name',
      '*.tsx',
      '\(',
      ...['-path', paths.monorepo.libs],
      ...['-or', '-path', paths.monorepo.apps],
      ...['-or', '-path', paths.monorepo.hosts],
      ...['-or', '-path', paths.monorepo.namespaceApps],
      ...['-or', '-path', paths.monorepo.namespaceLibs],
      '\)'
    ]
  )

const checkIsMonorepo = async () => {
  const result = await execa(
    'yarn',
    [
      'workspaces',
      'info'
    ],
    {
      reject: false
    }
  )

  return result.exitCode === 0
}

const runTransform = async ({ codemod, parserConfig }) => {
  const codemodPath = path.join(codemodsDirectory, `${codemod}/index.ts`)
  const isMonorepo = await checkIsMonorepo()

  let args = []
  let options = {}

  args = args.concat(['--parser', 'tsx'])
  args = args.concat(['--transform', codemodPath])

  if (parserConfig) {
    args.push(`--parser-config=${parserConfig}`)
  }

  if (!isMonorepo) {
    const files = globbySync(paths.spa)
    args = args.concat(files)
  } else {
    const findFilesOutput = findFilesInMonorepo()

    console.log('')
    console.log('Monorepo files to process:', findFilesOutput.stdout)
    console.log('')

    args.push('--stdin')
    options = {
      ...options,
      input: findFilesOutput.stdout
    }
  }

  console.log('')
  console.log(`Executing command: jscodeshift ${args.join(' ')}`)
  console.log('')

  const result = execaSync(
    jscodeshift,
    args,
    {
      stdout: 'inherit',
      ...options
    }
  )

  if (result.error) {
    throw result.error
  }
}

export const run = () => {
  const cli = meow(`
    Usage
      $ npx @toptal/picasso-codemod <codemod>
        codemod    example: v17.0.0/typography-sizes
      
      Options
	      --parser-config  Add parser config

      Examples
        $ npx @toptal/picasso-codemod v17.0.0/typography-sizes
        $ npx @toptal/picasso-codemod v17.0.0/typography-sizes --parser-config=path/to/your/config.json
    `,
    {
      importMeta: import.meta,
      flags: {
        parserConfig: {
          type: 'string'
        }
      }
    }
  )

  const codemod = cli.input[0]
  const parserConfig = cli.flags.parserConfig

  return runTransform({
    codemod,
    parserConfig
  })
}
