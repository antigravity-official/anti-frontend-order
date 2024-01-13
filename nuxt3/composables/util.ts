export const useUtil = () => {
  const uncommaRegex = /(\d)(?=(?:\d{3})+(?!\d))/g

  const comma = (val:number | undefined) => {
    return String(val ?? 0).replace(uncommaRegex, '$1,')
  }

  const productInfoText = (color: string, band: string, cup: string, quantityText: string) => {
    return color.concat('/', band, '/', cup, ' ', quantityText)
  }

  return {
    comma,
    productInfoText
  }
}
