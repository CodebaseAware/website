import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import '../app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="dark relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f2020] to-[#0a0a0a] text-[#a3a3a3]">
            <div className="relative z-10">
                <Component {...pageProps} />
            </div>

            {/* Solid background overlay for docs content only - positioned below navbar */}
            {/* <div className="absolute top-16 left-0 right-0 bottom-0 bg-[#0a0a0a] z-5" /> */}
        </div>
    )
}
