import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="dark min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#183838] to-[#0a0a0a] text-[#a3a3a3]">
            <Component {...pageProps} />
        </div>
    )
}
