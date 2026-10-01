function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/\p{Mark}/gu, '')
    .trim()
}

export { normalize }
