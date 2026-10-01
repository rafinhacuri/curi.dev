import type { Localized } from './content'

interface Contributor {
  name: string
  href: string
  avatar: string
}

type ProjectKind = 'live' | 'video' | 'source' | 'here'

interface Project {
  slug: string
  name: string
  summary: Localized
  icon: string
  href: string
  team: boolean
  tint: [string, string]
  contributors?: Contributor[]
}

const gabriel: Contributor = {
  name: 'Gabriel Rosa',
  href: 'https://rosa.dev.br',
  avatar: 'https://rosa.sh/gsr.webp',
}

const victor: Contributor = {
  name: 'Victor Mendes',
  href: 'https://kanj1.com.br/',
  avatar: 'https://avatars.githubusercontent.com/u/122651100?v=4',
}

const projects: Project[] = [
  {
    slug: 'sanchezdns',
    name: 'SanchezDNS',
    summary: { en: 'DNS management system', pt: 'Sistema de gerenciamento de DNS' },
    icon: 'ph:globe-simple',
    href: 'https://sanchezdns.curi.dev.br',
    team: false,
    tint: ['#3b6cff', '#0b1f66'],
  },
  {
    slug: 'escola-iac-2026',
    name: 'Escola IAC 2026',
    summary: { en: 'Website for the IAC 2026 school', pt: 'Página da Escola IAC 2026' },
    icon: 'ph:planet',
    href: 'https://escola-iac.cbpf.br/',
    team: false,
    tint: ['#7b5cff', '#1d0f52'],
  },
  {
    slug: 'deku',
    name: 'Deku',
    summary: {
      en: 'Income and expense tracking',
      pt: 'Controle de receitas e despesas',
    },
    icon: 'ph:coins',
    href: 'https://deku.curi.dev.br',
    team: false,
    tint: ['#2fc27a', '#0a4a2c'],
  },
  {
    slug: 'agenda-cbpf',
    name: 'Agenda-CBPF',
    summary: { en: 'News management system', pt: 'Sistema de gerenciamento de notícias' },
    icon: 'ph:newspaper',
    href: 'https://youtu.be/Z866qplsBdA',
    team: false,
    tint: ['#ff8a3d', '#7a2a00'],
  },
  {
    slug: 'os',
    name: 'Os',
    summary: { en: 'Service order system', pt: 'Sistema de ordens de serviço' },
    icon: 'ph:wrench',
    href: 'https://youtu.be/MRcAPzhyDLA',
    team: false,
    tint: ['#8e8e93', '#2c2c2e'],
  },
  {
    slug: 'eventos',
    name: 'Eventos',
    summary: { en: 'Event page builder', pt: 'Criação de páginas de eventos' },
    icon: 'ph:calendar-star',
    href: 'https://eventos.cbpf.br/wteo/',
    team: false,
    tint: ['#ff5c8a', '#6b0f2e'],
  },
  {
    slug: 'mesonpi',
    name: 'Mesonpi',
    summary: { en: 'Link hub for CBPF pages', pt: 'Sistema de links para páginas do CBPF' },
    icon: 'ph:atom',
    href: 'https://mesonpi.cbpf.br/projetos/',
    team: false,
    tint: ['#30c3e8', '#06425a'],
  },
  {
    slug: 'sgcad',
    name: 'SGCAD · Painel SELIC',
    summary: {
      en: 'Contract and staff management',
      pt: 'Controle de contratos e funcionários',
    },
    icon: 'ph:buildings',
    href: 'https://youtu.be/Rh3RZ4rqL_I',
    team: false,
    tint: ['#5e6bff', '#151a5c'],
  },
  {
    slug: 'explotools',
    name: 'Explotools Brasil',
    summary: {
      en: 'Web application for Explotools Brasil',
      pt: 'Aplicação web da Explotools Brasil',
    },
    icon: 'ph:cube',
    href: 'https://explotools.com.br/',
    team: false,
    tint: ['#f5b82e', '#6b4400'],
  },
  {
    slug: 'bicicletario',
    name: 'Bicicletário',
    summary: {
      en: 'Bike rack management',
      pt: 'Gestão e controle de um bicicletário',
    },
    icon: 'ph:bicycle',
    href: 'https://github.com/rafinhacuri/sistema-bicicletario',
    team: false,
    tint: ['#4cd964', '#0f4d1c'],
  },
  {
    slug: 'curi-dev',
    name: 'curi.dev.br',
    summary: { en: 'This website', pt: 'Este site' },
    icon: 'ph:user-circle',
    href: '/',
    team: false,
    tint: ['#1d1d1f', '#000000'],
  },
  {
    slug: 'labia',
    name: 'LABIA',
    summary: {
      en: 'Instrumentation and Astrophysics Laboratory website',
      pt: 'Página do Laboratório de Instrumentação e Astrofísica',
    },
    icon: 'ph:binoculars',
    href: 'https://labia.cbpf.br/',
    team: true,
    tint: ['#4b3bff', '#0d0838'],
    contributors: [gabriel],
  },
  {
    slug: 'auditorios',
    name: 'Agenda de Auditórios',
    summary: { en: 'Auditorium booking', pt: 'Reservas de auditórios' },
    icon: 'ph:calendar-blank',
    href: 'https://auditorios.cbpf.br/',
    team: true,
    tint: ['#ff6b4a', '#661a08'],
    contributors: [gabriel],
  },
  {
    slug: 'posgrad',
    name: 'Posgrad COEDU',
    summary: { en: 'CBPF graduate program system', pt: 'Sistema de pós-graduação do CBPF' },
    icon: 'ph:graduation-cap',
    href: 'https://posgrad.coedu.cbpf.br/login',
    team: true,
    tint: ['#0fb5a6', '#02423c'],
    contributors: [gabriel],
  },
  {
    slug: 'uniposrio',
    name: 'UNIPOSRIO Física',
    summary: {
      en: "Enrollment for UNIPOSRIO's master's and PhD programs",
      pt: 'Inscrições do mestrado e doutorado da UNIPOSRIO',
    },
    icon: 'ph:student',
    href: 'https://uniposrio-fisica.cbpf.br/',
    team: true,
    tint: ['#2f80ff', '#08275c'],
    contributors: [gabriel, victor],
  },
  {
    slug: 'id-cbpf',
    name: 'ID CBPF',
    summary: { en: 'CBPF identity management', pt: 'Gestão de identidade do CBPF' },
    icon: 'ph:identification-card',
    href: 'https://id.cbpf.br',
    team: true,
    tint: ['#1c1c1e', '#3a3a3c'],
    contributors: [gabriel],
  },
]

const highlightSlugs = ['sanchezdns', 'uniposrio', 'id-cbpf', 'posgrad', 'auditorios', 'eventos']

const highlights = highlightSlugs.flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
)

function projectKind(project: Project): ProjectKind {
  if (project.href === '/') return 'here'
  if (project.href.includes('youtu')) return 'video'
  if (project.href.includes('github.com')) return 'source'
  return 'live'
}

function projectHost(project: Project): string {
  if (project.href === '/') return 'curi.dev.br'
  return new URL(project.href).host.replace(/^www\./u, '')
}

export type { Contributor, ProjectKind, Project }
export { highlights, projects, projectKind, projectHost }
