"use client"

import ForceGraphClient from "@/components/graph/ForceGraphClient"
import { SiteFooter } from "@/components/site-footer"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDownLeft, ArrowRight, Binoculars, BookOpen, Code2, Lightbulb, Network } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Home() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const emailBoxRef = useRef<HTMLDivElement>(null)

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    // Handle scrolling to sections when page loads with hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Remove the # from the hash
            const elementId = hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                // Small delay to ensure the page is fully rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);


    const faqs = [
        {
            question: "How does MaiMap integrate with my existing LLM?",
            answer: "MaiMap works as an MCP (Model Context Protocol) server that connects directly to your LLM. It provides your AI with comprehensive context about your codebase, allowing it to answer complex questions about your distributed system architecture, dependencies, and data flows."
        },
        {
            question: "What types of repositories does MaiMap support?",
            answer: "MaiMap supports all major programming languages and frameworks. It can analyze microservices, monorepos, frontend applications, backend services, databases, and infrastructure code. The system understands relationships across different technologies and architectural patterns."
        },
        {
            question: "Is my code secure with MaiMap?",
            answer: "Security is our top priority. With the Pro plan, your code is processed securely in our cloud infrastructure. For maximum security, our On-Premise plan allows you to run MaiMap entirely within your own infrastructure, ensuring your code never leaves your environment."
        },
        {
            question: "How accurate are the architecture graphs?",
            answer: "MaiMap uses advanced semantic analysis to understand your codebase beyond simple text matching. It identifies actual relationships, dependencies, and data flows, providing highly accurate representations of your system architecture that update in real-time as your code evolves."
        },
        {
            question: "Can I try MaiMap before purchasing?",
            answer: "Yes! The Pro plan includes a free trial period where you can connect up to 3 repositories and explore all features. This gives you a complete understanding of how MaiMap can help your team before making a commitment."
        },
        {
            question: "What kind of support do you provide?",
            answer: "Pro plan users get email support with response times within 24 hours. On-Premise customers receive priority support with dedicated account management, custom integrations, and SLA guarantees to ensure your deployment runs smoothly."
        }
    ]

    return (
        <div className="dark min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f2020] to-[#0a0a0a] text-white">
            <SiteNavbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-16">
                    <div className="flex flex-col items-center text-center">
                        {/* Main Heading */}
                        <h1 className="mb-6 max-w-4xl font-sans text-4xl font-bold leading-tight tracking-tight text-balance text-white-100/90 md:text-5xl lg:text-6xl">
                            Make your LLM understand your entire distributed system
                        </h1>

                        {/* Taglines */}
                        <p className="mb-4 max-w-4xl text-base text-muted-foreground text-pretty md:text-lg">
                            LLMs struggle with context window limits when it comes to large and multi-repo codebases.
                        </p>
                        <p className="mb-12 max-w-2xl text-xl text-foreground/90 text-pretty md:text-2xl">
                            MaiMap parses your codebases into a contextual map, and gives that knowledge to your LLM.
                            {/* MaiMap is an MCP server which analyzes your repos from Git and provides that context to your LLM. */}
                        </p>

                        {/* Email Signup Form */}
                        <div id="join" className="mb-8 flex flex-col items-center gap-4" ref={emailBoxRef}>
                            <div className="relative rounded-sm border border-white/10 p-[1px] shadow-2xl backdrop-blur-sm">
                                <div className="overflow-hidden rounded-sm bg-gradient-to-br from-teal-400/10 to-teal-400/5 p-8">
                                    <form
                                        action="https://pntest.us14.list-manage.com/subscribe/post?u=12e6589bb25afc25201b8a0d6&amp;id=c96c436682&amp;f_id=008192e0f0"
                                        method="post"
                                        id="mc-embedded-subscribe-form"
                                        name="mc-embedded-subscribe-form"
                                        className="validate"
                                        target="_self"
                                        noValidate
                                    >
                                        <div className="mb-4 text-center">
                                            <p className="text-lg font-medium text-white">Get notified when we launch</p>
                                        </div>
                                        <div className="flex w-full max-w-md gap-2">
                                            <Input
                                                ref={emailInputRef}
                                                type="email"
                                                name="EMAIL"
                                                id="mce-EMAIL"
                                                placeholder="Enter your email"
                                                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-primary focus:ring-primary/50"
                                                required
                                            />
                                            <Button
                                                type="submit"
                                                name="subscribe"
                                                id="mc-embedded-subscribe"
                                                size="lg"
                                                className="group bg-primary text-black hover:bg-primary/90 cursor-pointer"
                                            >
                                                Join waitlist
                                            </Button>
                                        </div>

                                        {/* Hidden honeypot field */}
                                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                            <input type="text" name="b_12e6589bb25afc25201b8a0d6_c96c436682" tabIndex={-1} value="" />
                                        </div>

                                        {/* Unsubscribe message */}
                                        <div className="mt-4 text-center">
                                            <small className="text-sm text-white/70">
                                                *You can unsubscribe at anytime{' '}
                                                <span
                                                    className="cursor-pointer text-primary hover:text-primary/80"
                                                    title="To unsubscribe, enter your email, click 'Sign up' and then click 'Update your preferences'"
                                                >
                                                    <svg className="inline h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </small>
                                        </div>

                                        {/* Or Divider and Survey Link */}
                                        {/* <div className="mt-6 flex flex-col items-center gap-4">
                                            <div className="text-lg font-bold text-white/80">Or:</div>
                                            <a
                                                href="#"
                                                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors underline decoration-primary/50 hover:decoration-primary"
                                            >
                                                Fill out our customer survey to get 3 months free!
                                            </a>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Network className="h-4 w-4 text-primary" />
                                <span>Built for distributed systems</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Binoculars className="h-4 w-4 text-primary" />
                                <span>Understand your entire stack</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-primary" />
                                <span>More than just grep</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshot Section */}
            <section className="relative mx-auto max-w-5xl px-6 pb-32">
                <div className="space-y-16">
                    {/* First Window - AI Chat */}
                    <div>
                        <div className="mb-8 text-center">
                            <h3 className="text-3xl font-bold text-white md:text-4xl">
                                Ask anything about your distributed system
                            </h3>
                        </div>
                        <div className="relative">
                            {/* Glow effect behind screenshot */}
                            <div className="absolute inset-0 -top-20 bg-gradient-to-b from-accent/20 via-primary/10 to-transparent blur-3xl" />

                            <div className="relative overflow-hidden rounded-2xl  bg-gradient-to-br from-orange-500/20 to-orange-500/10 p-2 shadow-2xl backdrop-blur-sm">
                                <div className="overflow-hidden rounded-xl  bg-black/40">
                                    {/* Browser Chrome */}
                                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-3">
                                        <div className="flex gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                        </div>
                                    </div>

                                    {/* Screenshot Content */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-[#0f1f1f] to-[#0a0a0a] p-8">
                                        <div className="flex h-full flex-col gap-6">
                                            <div className="flex-1 space-y-4">
                                                {/* User Message 1 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">Show me the data flow between my authentication service and user management system</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 1 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-full rounded bg-white/10" />
                                                        <div className="h-3 w-3/4 rounded bg-white/10" />
                                                    </div>
                                                </div>

                                                {/* User Message 2 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">Which services depend on the payment processing module and what happens if it goes down?</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 2 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-5/6 rounded bg-white/10" />
                                                        <div className="h-3 w-4/5 rounded bg-white/10" />
                                                        <div className="h-3 w-2/3 rounded bg-white/10" />
                                                    </div>
                                                </div>

                                                {/* User Message 3 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">Which endpoints in the auth-service query the user_permissions table in Postgres?</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 3 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-4/5 rounded bg-white/10" />
                                                    </div>
                                                </div>

                                                {/* User Message 4 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">Trace the series of events, API calls and side-effects that happen when a user signs up</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 4 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-full rounded bg-white/10" />
                                                        <div className="h-3 w-3/4 rounded bg-white/10" />
                                                        <div className="h-3 w-5/6 rounded bg-white/10" />
                                                    </div>
                                                </div>

                                                {/* User Message 5 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">Describe the overall architecture of my microservices and how they interact with each other</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 5 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-5/6 rounded bg-white/10" />
                                                        <div className="h-3 w-2/3 rounded bg-white/10" />
                                                    </div>
                                                </div>

                                                {/* User Message 6 */}
                                                <div className="flex justify-end">
                                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-accent/20 px-4 py-3 text-sm">
                                                        <p className="text-foreground">What are the bounded contexts of my services and how do they map to business domains?</p>
                                                    </div>
                                                </div>

                                                {/* AI Response 6 */}
                                                <div className="flex gap-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                                                        <Code2 className="h-4 w-4 text-black" />
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="h-3 w-4/5 rounded bg-white/10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Window - Architecture Graphs */}
                    <div>
                        <div className="mb-8 text-center">
                            <h3 className="text-3xl font-bold text-white md:text-4xl">
                                Generate interactive architecture graphs
                            </h3>
                        </div>
                        <div className="relative">
                            {/* Glow effect behind screenshot */}
                            <div className="absolute inset-0 -top-20 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent blur-3xl" />

                            <div className="relative overflow-hidden rounded-2xl  bg-gradient-to-br from-orange-500/20 to-orange-500/10 p-2 shadow-2xl backdrop-blur-sm">
                                <div className="overflow-hidden rounded-xl  bg-black/40">
                                    {/* Browser Chrome */}
                                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/60 px-4 py-3">
                                        <div className="flex gap-2">
                                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                                        </div>
                                    </div>

                                    {/* Screenshot Content */}
                                    <div className="aspect-video bg-gradient-to-br from-[#0f1f1f] to-[#0a0a0a] p-2">
                                        <ForceGraphClient />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative mx-auto max-w-6xl px-6 pb-32">
                <div className="space-y-12">
                    {/* Built for distributed-systems */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white md:text-right">
                                Built for distributed-systems
                            </h3>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Parses your codebase into an interactive architecture graph</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Maps API calls and data flows between services</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Trace async events across multiple services</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Understand your entire stack */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white md:text-right">
                                Understand your entire stack
                            </h3>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Empowers your AI to:</p>
                            <ul className="space-y-3 py-4">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Generate service & architectural documentation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Triage bug reports</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">On-board new team members to your system</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* More than just grep */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white md:text-right">
                                More than just grep
                            </h3>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Combines static code parsing with LLM-based analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Works well on microservices & large monolithic codebases</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">Language-specific analysis means it supports:<br />
                                        Java, TypeScript, NodeJS, Python and Go</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-muted-foreground">More languages to come</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How does it work Section */}
            <section className="relative mx-auto max-w-6xl px-6 pb-32">
                <div className="text-center">
                    <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
                        How does it work?
                    </h2>

                    <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
                        {/* Step 1 */}
                        <div className="relative rounded-sm border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-accent/60 text-2xl font-bold text-black">
                                    1
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    Analyze Your Repositories
                                </h3>
                                <p className="text-muted-foreground">
                                    Connect your Git organization to MaiMap so it can import your repos and analyze your code.
                                </p>
                            </div>
                            <ArrowRight className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-white/40" />
                        </div>

                        {/* Center Arrow from 2 to 3 */}
                        <ArrowDownLeft className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white/40" />

                        {/* Step 2 */}
                        <div className="relative rounded-sm border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/60 to-primary/60 text-2xl font-bold text-black">
                                    2
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    View Analyses
                                </h3>
                                <p className="text-muted-foreground">
                                    Explore the results in an interactive graph of your service architecture.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative rounded-sm border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-accent/60 text-2xl font-bold text-black">
                                    3
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    Connect via MCP
                                </h3>
                                <p className="text-muted-foreground">
                                    Empower your LLM by connecting to our API with an MCP server.
                                </p>
                            </div>
                            <ArrowRight className="hidden md:block absolute right-[-28px] top-1/2 -translate-y-1/2 text-white/40" />
                        </div>

                        {/* Step 4 */}
                        <div className="relative rounded-sm border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm shadow-2xl">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/60 to-primary/60 text-2xl font-bold text-black">
                                    4
                                </div>
                                <h3 className="mb-4 text-xl font-semibold text-white">
                                    Ask Your AI
                                </h3>
                                <p className="text-muted-foreground">
                                    Ask questions about complex workflows, architecture and code. Gain insight that would have taken you days or weeks to find.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Learn more heading */}
                    <h2 className="mt-12 mb-8 text-3xl font-bold text-white md:text-4xl">Want to learn more?</h2>

                    {/* Badge */}
                    <Button asChild className="mt-12 mb-8 bg-white text-black hover:bg-white/90">
                        <a href="/docs">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Read the Docs
                        </a>
                    </Button>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative mx-auto max-w-6xl px-6 pb-32">
                <div className="text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Pricing
                    </h2>
                    <p className="mb-16 text-lg text-muted-foreground">
                        MaiMap is currently in prototype phase so the exact pricing is not yet determined. However there will be hosted and on-premise options available.
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                        {/* Pro Plan */}
                        <div className="relative overflow-hidden rounded-sm border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-2xl backdrop-blur-sm">
                            <div className="text-center">
                                <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
                                <p className="mb-6 text-muted-foreground">For most teams</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-white">Price TBD</span>
                                    {/* <span className="text-muted-foreground">/month</span> */}
                                </div>

                                <ul className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">Up to 10 repositories*</span>
                                    </li>
                                </ul>

                                <div className="mb-8 text-center">
                                    <p className="text-sm text-muted-foreground">
                                        *Additional repositories beyond 10 will incur extra charges
                                        <br />
                                        *Large codebases will incur extra charges based on the number of lines of code
                                    </p>
                                </div>

                                <Button className="w-full bg-gray-500 text-white cursor-not-allowed" disabled>
                                    Coming soon
                                </Button>
                            </div>
                        </div>

                        {/* On-Premise Plan */}
                        <div className="relative overflow-hidden rounded-sm  bg-gradient-to-br from-orange-500/20 to-orange-500/10 p-8 shadow-2xl backdrop-blur-sm">

                            <div className="text-center">
                                <h3 className="mb-2 text-2xl font-bold text-white">On-Premise</h3>
                                <p className="mb-6 text-muted-foreground">For enterprise security</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-white">Custom</span>
                                    <span className="text-muted-foreground"> pricing</span>
                                </div>

                                <ul className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">Unlimited repositories</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">Self-hosted deployment</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">Priority support</span>
                                    </li>
                                </ul>

                                <Button className="w-full bg-gray-500 text-white cursor-not-allowed" disabled>
                                    Coming soon
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {/* <section className="relative mx-auto max-w-4xl px-6 pb-32">
                <div className="text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mb-16 text-lg text-muted-foreground">
                        Everything you need to know about MaiMap
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-2xl border border-white/10 bg-gradient-to-br from-card/50 to-card/30 shadow-xl backdrop-blur-sm">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left transition-colors hover:bg-white/5 cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-white">
                                            {faq.question}
                                        </h3>
                                        <span
                                            className="ml-4 flex h-5 w-5 items-center justify-center rounded-sm border border-white/20 text-muted-foreground"
                                        >
                                            {openFAQ === index ? '-' : '+'}
                                        </span>
                                    </div>
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <SiteFooter />
        </div>
    )
}
