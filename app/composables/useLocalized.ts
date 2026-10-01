import type { Localized } from '~/data/content'

function useLocalized(): (text: Localized | string) => string {
  const { $i18n } = useNuxtApp()
  return (text) => {
    if (typeof text === 'string') return text
    return $i18n.locale.value === 'pt' ? text.pt : text.en
  }
}

export { useLocalized }
