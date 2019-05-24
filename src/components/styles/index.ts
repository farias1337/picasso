import color from 'color'

// darken calculates based on the absolute color value
// https://github.com/Qix-/color/issues/53#issuecomment-487822576
export const darken = (inputColor: string, amount: number) => {
  const colorValue = color(inputColor)
  const lightness = colorValue.lightness()

  return colorValue.lightness(lightness - lightness * amount).hex()
}

// lighten calculates based on the absolute color value
// https://github.com/Qix-/color/issues/53#issuecomment-487822576
export const lighten = (inputColor: string, amount: number) => {
  const colorValue = color(inputColor)
  const lightness = colorValue.lightness()

  return colorValue.lightness(lightness + (100 - lightness) * amount).hex()
}

export const alpha = (inputColor: string, amount: number) => {
  return color(inputColor)
    .alpha(amount)
    .toString()
}

export const rem = (px: string, baseFontSize = 16) => {
  const pxNumber = px.replace('px', '')

  return `${Number.parseInt(pxNumber) / baseFontSize}rem`
}

export { default as withClasses } from './withClasses'

export { createPropertiesStyles } from './createPropertiesStyles'
