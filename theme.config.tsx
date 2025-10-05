import { SiteNavbar } from './components/site-navbar'

export default {
    logo: <span>MaiMap Docs</span>,
    project: {
        link: 'https://example.com',
    },
    docsRepositoryBase: 'https://example.com/docs',
    nextThemes: {
        defaultTheme: 'dark',
        forcedTheme: 'dark',
    },
    navbar: {
        component: <SiteNavbar />,
    },
    footer: {
        text: 'MaiMap Documentation',
    },
}
