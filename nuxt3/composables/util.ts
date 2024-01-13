export const useUtil = () => {
  const uncommaRegex = /(\d)(?=(?:\d{3})+(?!\d))/g

  const comma = (val:number | undefined) => {
    return String(val ?? 0).replace(uncommaRegex, '$1,')
  }

  return {
    comma
  }
}
