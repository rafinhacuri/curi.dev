interface Localized {
  en: string
  pt: string
}

interface Social {
  name: string
  handle: string
  icon: string
  href: string
}

const email = 'rafael@curi.dev.br'

const socials: Social[] = [
  {
    name: 'GitHub',
    handle: 'rafinhacuri',
    icon: 'ph:github-logo',
    href: 'https://github.com/rafinhacuri',
  },
  {
    name: 'LinkedIn',
    handle: 'rafael-curi',
    icon: 'ph:linkedin-logo',
    href: 'https://www.linkedin.com/in/rafael-curi-a4a837292/',
  },
  {
    name: 'Email',
    handle: email,
    icon: 'ph:envelope-simple',
    href: `mailto:${email}`,
  },
]

interface Tool {
  name: string
  icon: string
}

interface Orbit {
  id: 'interface' | 'service' | 'infrastructure'
  title: Localized
  summary: Localized
  tools: Tool[]
}

const orbits: Orbit[] = [
  {
    id: 'interface',
    title: { en: 'Interface', pt: 'Interface' },
    summary: {
      en: 'What people see and click. Typed, accessible and fast on a phone.',
      pt: 'O que as pessoas veem e clicam. Tipado, acessível e rápido no celular.',
    },
    tools: [
      { name: 'Nuxt', icon: 'simple-icons:nuxt' },
      { name: 'Vue', icon: 'simple-icons:vuedotjs' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'CSS', icon: 'simple-icons:css' },
      { name: 'ESLint', icon: 'simple-icons:eslint' },
      { name: 'Oxlint', icon: 'simple-icons:oxc' },
      { name: 'Zod', icon: 'simple-icons:zod' },
      { name: 'Valibot', icon: 'ph:check-circle' },
    ],
  },
  {
    id: 'service',
    title: { en: 'Services', pt: 'Serviços' },
    summary: {
      en: 'The APIs behind the screen, and the data they keep.',
      pt: 'As APIs por trás da tela e os dados que elas guardam.',
    },
    tools: [
      { name: 'Go', icon: 'simple-icons:go' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'LDAP', icon: 'ph:tree-structure' },
      { name: 'AWS S3', icon: 'simple-icons:amazons3' },
    ],
  },
  {
    id: 'infrastructure',
    title: { en: 'Infrastructure', pt: 'Infraestrutura' },
    summary: {
      en: 'The machines, names and pipelines that keep it all answering.',
      pt: 'As máquinas, nomes e pipelines que mantêm tudo respondendo.',
    },
    tools: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Nginx', icon: 'simple-icons:nginx' },
      { name: 'Linux', icon: 'simple-icons:linux' },
      { name: 'RHEL', icon: 'simple-icons:redhat' },
      { name: 'DNS', icon: 'ph:globe-simple' },
      { name: 'PM2', icon: 'simple-icons:pm2' },
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitLab CI', icon: 'simple-icons:gitlab' },
    ],
  },
]

interface Capability {
  layer: Localized
  title: Localized
  body: Localized
  tags: (string | Localized)[]
}

const capabilities: Capability[] = [
  {
    layer: { en: 'Web infrastructure', pt: 'Infraestrutura web' },
    title: {
      en: 'Every name resolving, every container up.',
      pt: 'Cada nome resolvendo, cada container de pé.',
    },
    body: {
      en: 'I run the layer everything else stands on: authoritative and recursive DNS, services orchestrated with Docker and served through Nginx with HTTP/3, and a data layer that pairs MongoDB for persistence with Redis for caching, tuned for stability and speed.',
      pt: 'Cuido da camada em que todo o resto se apoia: DNS autoritativo e recursivo, serviços orquestrados em Docker e servidos por Nginx com HTTP/3, e uma camada de dados que une MongoDB para persistência e Redis para cache, ajustada para estabilidade e velocidade.',
    },
    tags: ['DNS', 'Docker', 'Nginx · HTTP/3', 'MongoDB', 'Redis'],
  },
  {
    layer: { en: 'Identity', pt: 'Identidade' },
    title: {
      en: 'One login for every system.',
      pt: 'Um login para todos os sistemas.',
    },
    body: {
      en: 'I build Single Sign-On so people sign in once and every application trusts that session. Authentication lives in one place, with OAuth 2.0 flows instead of a password form per app.',
      pt: 'Desenvolvo Single Sign-On para que as pessoas entrem uma vez e todas as aplicações confiem nessa sessão. A autenticação fica centralizada, com fluxos OAuth 2.0 em vez de um formulário de senha por aplicação.',
    },
    tags: ['SSO', 'OAuth 2.0', { en: 'Identity management', pt: 'Gestão de identidade' }],
  },
  {
    layer: { en: 'Delivery', pt: 'Entrega' },
    title: {
      en: 'Code reaches production clean, not just fast.',
      pt: 'O código chega à produção limpo, não só rápido.',
    },
    body: {
      en: 'I set up CI/CD pipelines and runners so every change is built, tested and validated automatically. Releases stay frequent without becoming a gamble.',
      pt: 'Monto pipelines de CI/CD e runners para que cada mudança seja construída, testada e validada automaticamente. As entregas continuam frequentes sem virar aposta.',
    },
    tags: ['GitLab CI/CD', 'GitHub', { en: 'Automated tests', pt: 'Testes automatizados' }],
  },
  {
    layer: { en: 'Modernization', pt: 'Modernização' },
    title: {
      en: 'Turning legacy PHP into Go and Nuxt.',
      pt: 'Transformando PHP legado em Go e Nuxt.',
    },
    body: {
      en: 'I migrate legacy systems to a modern stack: APIs in Go, interfaces in Nuxt and TypeScript. Critical logic gets rewritten to remove technical debt, with strong typing, modern security and real performance.',
      pt: 'Migro sistemas legados para uma stack moderna: APIs em Go, interfaces em Nuxt e TypeScript. Lógicas críticas são reescritas para eliminar dívida técnica, com tipagem forte, segurança moderna e performance real.',
    },
    tags: ['PHP → Go', 'Nuxt', 'TypeScript'],
  },
  {
    layer: { en: 'Observability', pt: 'Observabilidade' },
    title: {
      en: 'Seeing problems before anyone reports them.',
      pt: 'Ver o problema antes de alguém reportar.',
    },
    body: {
      en: 'I close the loop with monitoring that watches containers and services in real time. Anomalies are caught early, so every improvement ships with high availability instead of surprises.',
      pt: 'Fecho o ciclo com monitoramento que vigia containers e serviços em tempo real. Anomalias são detectadas cedo, e cada melhoria chega com alta disponibilidade, não com surpresas.',
    },
    tags: [
      { en: 'Monitoring', pt: 'Monitoramento' },
      'Containers',
      { en: 'High availability', pt: 'Alta disponibilidade' },
    ],
  },
]

function ringOf(index: number): number {
  return orbits.length - 1 - index
}

export type { Capability, Localized, Social, Tool, Orbit }
export { capabilities, email, socials, orbits, ringOf }
