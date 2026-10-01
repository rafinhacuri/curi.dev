<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })
  useSeoMeta({ description: t('description') })
  defineOgImage('Model.takumi', { title: t('og'), description: t('description') })
</script>

<template>
  <div>
    <HomeHero />
    <HomeIntro />
    <HomeStack />
    <HomeCapabilities />
    <HomeProjects />
    <HomeCertificates />
    <HomeContact />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Home",
    "og": "Rafael Curi",
    "description": "Full-stack developer in Rio de Janeiro. Interfaces in Nuxt, APIs in Go and the infrastructure underneath: DNS, containers and pipelines."
  },
  "pt": {
    "title": "Início",
    "og": "Rafael Curi",
    "description": "Desenvolvedor full-stack no Rio de Janeiro. Interfaces em Nuxt, APIs em Go e a infraestrutura por baixo: DNS, containers e pipelines."
  }
}
</i18n>
