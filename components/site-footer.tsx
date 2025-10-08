"use client";

import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
    const config = getConfig();
    const basePath = config?.publicRuntimeConfig?.basePath || '';
    return (
        <footer className="border-t border-white/10 bg-gradient-to-t from-black/30 to-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Image
                            src={`${basePath}/logo.svg`}
                            alt="MaiMap Logo"
                            width={76}
                            height={76}
                            className="h-6 w-12 opacity-70"
                        />
                        <span className="font-sans text-lg font-semibold">MaiMap</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="/" className="transition-colors hover:text-foreground">Features</Link>
                        <Link href="/docs" className="transition-colors hover:text-foreground">Docs</Link>
                        <a
                            href="#pricing"
                            className="transition-colors hover:text-foreground cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                const pricingElement = document.getElementById('pricing');
                                if (pricingElement) {
                                    // If we're on the home page, just scroll
                                    pricingElement.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    // If we're on another page, navigate to home page with hash
                                    window.location.href = '/#pricing';
                                }
                            }}
                        >
                            Pricing
                        </a>
                    </div>

                    <div className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} MaiMap. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
