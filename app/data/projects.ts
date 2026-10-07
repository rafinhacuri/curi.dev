import type { Localized } from './content'

interface Contributor {
  name: string
  href: string
  avatar: string
}

type ProjectKind = 'live' | 'private' | 'source' | 'here'

interface Project {
  slug: string
  name: string
  summary: Localized
  icon: string
  href?: string
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

const natan: Contributor = {
  name: 'Natan Braslavsky',
  href: 'https://github.com/NatanBraslavsky',
  avatar: 'https://avatars.githubusercontent.com/u/169498434?v=4',
}

const projects: Project[] = [
  {
    slug: 'sso-cbpf',
    name: 'SSO CBPF',
    summary: { en: 'CBPF single sign-on', pt: 'Sistema de SSO do CBPF' },
    icon: 'ph:fingerprint',
    href: 'https://sso.cbpf.br',
    team: true,
    tint: ['#00a3ff', '#002b4d'],
    contributors: [gabriel],
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
  {
    slug: 'posgrad',
    name: 'Posgrad COEDU',
    summary: { en: 'CBPF graduate program system', pt: 'Sistema de pós-graduação do CBPF' },
    icon: 'ph:graduation-cap',
    href: 'https://posgrad.coedu.cbpf.br/login',
    team: true,
    tint: ['#0fb5a6', '#02423c'],
    contributors: [gabriel, natan],
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
    slug: 'eventos',
    name: 'Eventos',
    summary: { en: 'Event page builder', pt: 'Criação de páginas de eventos' },
    icon: 'ph:calendar-star',
    href: 'https://eventos.cbpf.br/wteo/',
    team: true,
    tint: ['#ff5c8a', '#6b0f2e'],
    contributors: [gabriel, natan],
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
    slug: 'sanchezdns',
    name: 'SanchezDNS',
    summary: { en: 'DNS management system', pt: 'Sistema de gerenciamento de DNS' },
    icon: 'ph:globe-simple',
    href: 'https://sanchezdns.curi.dev.br',
    team: false,
    tint: ['#3b6cff', '#0b1f66'],
  },
  {
    slug: 'dns-cbpf',
    name: 'DNS CBPF',
    summary: { en: 'CBPF DNS zone management', pt: 'Gerenciamento das zonas de DNS do CBPF' },
    icon: 'ph:tree-structure',
    team: false,
    tint: ['#14b8a6', '#053d38'],
  },
  {
    slug: 'relatorios',
    name: 'Relatórios',
    summary: {
      en: 'Annual report submission for CBPF staff',
      pt: 'Preenchimento do relatório anual dos servidores do CBPF',
    },
    icon: 'ph:file-text',
    team: false,
    tint: ['#a855f7', '#3b0764'],
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
    href: 'https://github.com/rafinhacuri/Deku',
    team: false,
    tint: ['#2fc27a', '#0a4a2c'],
  },
  {
    slug: 'agenda-cbpf',
    name: 'Agenda-CBPF',
    summary: { en: 'News management system', pt: 'Sistema de gerenciamento de notícias' },
    icon: 'ph:newspaper',
    team: false,
    tint: ['#ff8a3d', '#7a2a00'],
  },
  {
    slug: 'os',
    name: 'Os',
    summary: { en: 'Service order system', pt: 'Sistema de ordens de serviço' },
    icon: 'ph:wrench',
    team: false,
    tint: ['#8e8e93', '#2c2c2e'],
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
    name: 'SGCAD',
    summary: {
      en: 'Contract and staff management',
      pt: 'Controle de contratos e funcionários',
    },
    icon: 'ph:buildings',
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
    slug: 'klasse',
    name: 'Klasse Cervejaria',
    summary: {
      en: 'Website for Klasse craft brewery',
      pt: 'Site da cervejaria artesanal Klasse',
    },
    icon: 'ph:beer-stein',
    href: 'https://klasse-cervejaria-kappa.vercel.app/',
    team: false,
    tint: ['#f4b52a', '#1a0d04'],
  },
]

const highlightSlugs = [
  'sso-cbpf',
  'id-cbpf',
  'posgrad',
  'uniposrio',
  'eventos',
  'labia',
  'sanchezdns',
]

const highlights = highlightSlugs.flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
)

function projectKind(project: Project): ProjectKind {
  if (!project.href) return 'private'
  if (project.href === '/') return 'here'
  if (project.href.includes('github.com')) return 'source'
  return 'live'
}

function projectHost(project: Project): string | undefined {
  if (!project.href) return undefined
  if (project.href === '/') return 'curi.dev.br'
  return new URL(project.href).host.replace(/^www\./u, '')
}

export type { Contributor, ProjectKind, Project }
export { highlights, projects, projectKind, projectHost }
