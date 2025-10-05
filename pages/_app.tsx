import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="dark relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#183838] to-[#0a0a0a] text-[#a3a3a3]">
            {/* Background blur overlay to match main page */}
            <div className="relative z-20">
                <Component {...pageProps} />
            </div>
        </div>
    )
}
