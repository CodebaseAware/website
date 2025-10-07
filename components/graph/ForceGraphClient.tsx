"use client";

import { useEffect, useRef } from "react";

type SimpleNode = {
    id: string;
    name?: string;
    color?: string;
};

type SimpleLink = {
    source: string;
    target: string;
};

type Props = {
    width?: number;
    height?: number;
};

const defaultData: { nodes: SimpleNode[]; links: SimpleLink[] } = {
    nodes: [
        { id: "service-a", name: "Service A", color: "#22d3ee" },
        { id: "service-b", name: "Service B", color: "#a78bfa" },
        { id: "service-c", name: "Service C", color: "#f59e0b" },
        { id: "db", name: "Database", color: "#34d399" },
    ] as SimpleNode[],
    links: [
        { source: "service-a", target: "service-b" },
        { source: "service-b", target: "service-c" },
        { source: "service-c", target: "db" },
        { source: "service-a", target: "db" },
    ] as SimpleLink[],
};

export function ForceGraphClient({ width = 960, height = 540 }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const graphRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let mounted = true;
        let ro: ResizeObserver | null = null;

        (async () => {
            const ForceGraph2D: any = (await import("force-graph")).default;
            if (!mounted || !containerRef.current) return;

            const fg = ForceGraph2D();
            graphRef.current = fg(containerRef.current)
                .width(containerRef.current.clientWidth || width)
                .height(height)
                .backgroundColor("rgba(0,0,0,0)")
                .nodeId("id")
                .nodeLabel((n: any) => n.name || n.id)
                .nodeColor((n: any) => n.color || "#60a5fa")
                .graphData(defaultData);

            // Fit once on mount; avoid repeated fits on resize to prevent growth loops
            fg.zoomToFit(400, 20);

            const handleResize = () => {
                if (!containerRef.current) return;
                const newWidth = containerRef.current.clientWidth;
                fg.width(newWidth).height(height);
            };

            ro = new ResizeObserver(handleResize);
            ro.observe(containerRef.current);
        })();

        return () => {
            mounted = false;
            if (ro) ro.disconnect();
            if (containerRef.current) containerRef.current.innerHTML = "";
        };
    }, [width, height]);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/30"
            style={{ height }}
        />
    );
}

export default ForceGraphClient;


