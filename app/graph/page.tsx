import ForceGraphClient from "@/components/graph/ForceGraphClient";
import { SiteNavbar } from "@/components/site-navbar";

export const metadata = {
    title: "Graph",
    description: "Graph view",
};

export default function GraphPage() {
    return (
        <div className="dark min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f2020] to-[#0a0a0a] text-white">
            <SiteNavbar />

            <main className="relative mx-auto max-w-6xl px-6 py-16">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Graph</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    This is the Graph page at <code>/graph</code>.
                </p>
                <div className="mt-8">
                    <ForceGraphClient height={540} />
                </div>
            </main>
        </div>
    );
}


