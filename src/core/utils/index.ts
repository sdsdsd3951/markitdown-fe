export function truncateString(str: string, max: number) {
  if (str.length <= max) {
    return str
  }
  return str.slice(0, max) + '...'
}
