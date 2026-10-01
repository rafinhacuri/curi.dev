import type { Localized } from './content'

type Track = 'languages' | 'web' | 'infrastructure'

interface Certificate {
  slug: string
  title: Localized
  topic: string
  icon: string
  track: Track
  file?: string
}

interface TrackStyle {
  id: Track
  label: Localized
  tint: [string, string]
  ink: 'light' | 'dark'
}

const trackStyles: Record<Track, TrackStyle> = {
  languages: {
    id: 'languages',
    label: { en: 'Languages', pt: 'Linguagens' },
    tint: ['#3a66ff', '#0b1d6b'],
    ink: 'light',
  },
  web: { id: 'web', label: { en: 'Web', pt: 'Web' }, tint: ['#3a3a3c', '#111112'], ink: 'light' },
  infrastructure: {
    id: 'infrastructure',
    label: { en: 'Infrastructure', pt: 'Infraestrutura' },
    tint: ['#f5f5f7', '#d2d2d7'],
    ink: 'dark',
  },
}

const tracks = Object.values(trackStyles)

function trackOf(certificate: Certificate): TrackStyle {
  return trackStyles[certificate.track]
}

function htmlCss(module: number): Certificate {
  return {
    slug: `html-css-${module}`,
    title: {
      en: `Web development (HTML5 + CSS3), module ${module} of 5`,
      pt: `Desenvolvimento web (HTML5 + CSS3), módulo ${module} de 5`,
    },
    topic: 'HTML & CSS',
    icon: 'simple-icons:html5',
    track: 'web',
    file: module <= 4 ? `/certs/html-css0${module}.pdf` : undefined,
  }
}

function linux(module: number, en: string, pt: string): Certificate {
  return {
    slug: `linux-${module}`,
    title: {
      en: `Linux ${module.toString().padStart(2, '0')}: ${en}`,
      pt: `Linux ${module.toString().padStart(2, '0')}: ${pt}`,
    },
    topic: 'Linux',
    icon: 'simple-icons:linux',
    track: 'infrastructure',
    file: `/certs/linux0${module}.pdf`,
  }
}

const certificates: Certificate[] = [
  {
    slug: 'javascript',
    title: {
      en: 'Learn JavaScript in 7 days + real projects',
      pt: 'Aprenda JavaScript em 7 dias + projetos reais',
    },
    topic: 'JavaScript',
    icon: 'simple-icons:javascript',
    track: 'languages',
    file: '/certs/js.jpg',
  },
  {
    slug: 'typescript',
    title: {
      en: 'Learn TypeScript in 7 days + real projects',
      pt: 'Aprenda TypeScript em 7 dias + projetos reais',
    },
    topic: 'TypeScript',
    icon: 'simple-icons:typescript',
    track: 'languages',
    file: '/certs/ts.jpg',
  },
  {
    slug: 'go',
    title: {
      en: "Go: exploring Google's language",
      pt: 'Go: explorando a linguagem do Google',
    },
    topic: 'Go',
    icon: 'simple-icons:go',
    track: 'languages',
    file: '/certs/go.jpg',
  },
  {
    slug: 'vue',
    title: {
      en: 'Vue 3 complete, with Composition API, Vuex and Vue Router',
      pt: 'Vue 3 completo, com Composition API, Vuex e Vue Router',
    },
    topic: 'Vue',
    icon: 'simple-icons:vuedotjs',
    track: 'web',
    file: '/certs/vuejs.jpg',
  },
  {
    slug: 'nuxt',
    title: {
      en: 'Master Nuxt 3: full-stack complete guide',
      pt: 'Master Nuxt 3: guia completo full-stack',
    },
    topic: 'Nuxt',
    icon: 'simple-icons:nuxt',
    track: 'web',
    file: '/certs/nuxtjs.jpg',
  },
  {
    slug: 'node',
    title: {
      en: 'Node.js complete course, basic to advanced',
      pt: 'Node.js curso completo, do básico ao avançado',
    },
    topic: 'Node.js',
    icon: 'simple-icons:nodedotjs',
    track: 'web',
    file: '/certs/node.jpg',
  },
  htmlCss(1),
  htmlCss(2),
  htmlCss(3),
  htmlCss(4),
  htmlCss(5),
  {
    slug: 'docker',
    title: {
      en: 'Docker, basic to advanced + real projects',
      pt: 'Docker do básico ao avançado + projetos reais',
    },
    topic: 'Docker',
    icon: 'simple-icons:docker',
    track: 'infrastructure',
    file: '/certs/docker.pdf',
  },
  {
    slug: 'dns',
    title: { en: 'DNS deep dive', pt: 'Mergulho profundo em DNS' },
    topic: 'DNS',
    icon: 'ph:globe-simple',
    track: 'infrastructure',
    file: '/certs/dns.pdf',
  },
  {
    slug: 'oauth',
    title: {
      en: 'The nuts and bolts of OAuth 2.0',
      pt: 'Os detalhes práticos do OAuth 2.0',
    },
    topic: 'OAuth 2.0',
    icon: 'ph:shield-check',
    track: 'infrastructure',
    file: '/certs/oauth.pdf',
  },
  {
    slug: 'git',
    title: { en: 'Git and GitHub', pt: 'Git e GitHub' },
    topic: 'Git',
    icon: 'simple-icons:git',
    track: 'infrastructure',
    file: '/certs/git-github.pdf',
  },
  linux(0, 'first steps', 'primeiros passos'),
  linux(1, 'interface and terminal', 'interface e terminal'),
  linux(2, 'packages and processes', 'pacotes e gestão de processos'),
  linux(3, 'programming with Linux', 'programação com Linux'),
  linux(4, 'advanced terminal', 'terminal avançado'),
  linux(5, 'disks and RAID', 'discos e RAID'),
]

export type { Track, Certificate, TrackStyle }
export { tracks, trackOf, certificates }
