import Image from "next/image";
import Link from "next/link";

export function SiteNavbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-transparent relative">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="MaiMap Logo"
                            width={76}
                            height={76}
                            className="h-8 w-16 opacity-70"
                        />
                        <span className="font-sans text-xl font-semibold text-white">MaiMap</span>
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Features
                        </Link>
                        <Link href="/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                            Docs
                        </Link>
                        <a
                            href="#pricing"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
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
                        <Link href="/#join" className="text-sm">
                            <span className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90">
                                Join waitlist
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* ensure border is visible on any background without affecting layout */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[3px] h-px bg-white/20" />
        </nav>
    )
}
