"use client";

import { useEffect, useRef } from "react";

type Props = { width?: number; height?: number };

interface GraphNode {
    id: string;
    name: string;
    x?: number;
    y?: number;
    fx?: number;
    fy?: number;
    neighbors?: GraphNode[];
    links?: any[];
}

interface GraphLink {
    source: string;
    target: string;
    async: boolean;
    connections: { [key: string]: number };
}

export default function ForceGraphClient({ width = 960, height = 540 }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let mounted = true;

        (async () => {
            const ForceGraph2D: any = (await import("force-graph")).default;
            if (!mounted || !containerRef.current) return;

            // Microservices architecture
            const gData = {
                nodes: [
                    { id: 'auth', name: 'Auth Service' } as GraphNode,
                    { id: 'order', name: 'Order Service' } as GraphNode,
                    { id: 'payment', name: 'Payment Service' } as GraphNode,
                    { id: 'user', name: 'User Service' } as GraphNode,
                    { id: 'notification', name: 'Notification Service' } as GraphNode,
                    { id: 'api-gateway', name: 'API Gateway' } as GraphNode,
                ],
                links: [
                    // API Gateway routes to services
                    { source: 'api-gateway', target: 'order', async: false, connections: { http: 12, grpc: 1 } } as GraphLink,
                    { source: 'api-gateway', target: 'payment', async: false, connections: { http: 8, grpc: 1 } } as GraphLink,
                    { source: 'api-gateway', target: 'user', async: false, connections: { http: 15, grpc: 1 } } as GraphLink,

                    // Auth service called by most services
                    { source: 'order', target: 'auth', async: false, connections: { grpc: 2, } } as GraphLink,
                    { source: 'payment', target: 'auth', async: false, connections: { grpc: 2, } } as GraphLink,
                    { source: 'user', target: 'auth', async: false, connections: { grpc: 2, } } as GraphLink,
                    { source: 'auth', target: 'user', async: false, connections: { grpc: 2, } } as GraphLink,

                    // Service interactions
                    { source: 'order', target: 'payment', async: true, connections: { kafka: 3 } } as GraphLink,
                    { source: 'payment', target: 'notification', async: true, connections: { kafka: 4 } } as GraphLink,
                    { source: 'order', target: 'notification', async: true, connections: { kafka: 2 } } as GraphLink,
                ]
            };

            // cross-link node objects for hover effects
            gData.links.forEach(link => {
                const a = gData.nodes.find(n => n.id === link.source) as GraphNode;
                const b = gData.nodes.find(n => n.id === link.target) as GraphNode;
                if (a && b) {
                    !a.neighbors && (a.neighbors = []);
                    !b.neighbors && (b.neighbors = []);
                    a.neighbors.push(b);
                    b.neighbors.push(a);

                    !a.links && (a.links = []);
                    !b.links && (b.links = []);
                    a.links.push(link);
                    b.links.push(link);
                }
            });

            const highlightNodes = new Set();
            const highlightLinks = new Set();
            let hoverNode = null;

            // Save/restore node positions
            function savePositions() {
                const positions: any = {};
                gData.nodes.forEach(node => {
                    if (node.x !== undefined && node.y !== undefined) {
                        positions[node.id] = { x: node.x, y: node.y };
                    }
                });
                localStorage.setItem('graphPositions', JSON.stringify(positions));
                console.log('positions', JSON.stringify(positions));
            }

            function restorePositions() {
                // Always use hardcoded default positions
                const positions = {
                    "auth": { "x": 32.598417332088, "y": 6.660367168250269 },
                    "order": { "x": -2.505745532125559, "y": -19.693401302217584 },
                    "payment": { "x": -2.4866583474546204, "y": 0.42566878083795523 },
                    "user": { "x": -1.9951033734462, "y": 17.97567107407183 },
                    "notification": { "x": 32.248188089882824, "y": -10.006569890149956 },
                    "api-gateway": { "x": -34.472120161819575, "y": 0.0876067570318128 }
                };

                // Commented out for future use - load saved positions from localStorage
                // const saved = localStorage.getItem('graphPositions');
                // let positions;
                // if (saved) {
                //     positions = JSON.parse(saved);
                // } else {
                //     // Use hardcoded default positions
                //     positions = {
                //         "auth": { "x": 33.871144604815264, "y": 7.933094440977543 },
                //         "order": { "x": -2.505745532125559, "y": -19.693401302217584 },
                //         "payment": { "x": -2.4866583474546204, "y": 0.42566878083795523 },
                //         "user": { "x": -1.9951033734462, "y": 17.97567107407183 },
                //         "notification": { "x": 32.248188089882824, "y": -10.006569890149954 },
                //         "api-gateway": { "x": -38.83575652545594, "y": 0.17851584794090403 }
                //     };
                // }

                gData.nodes.forEach(node => {
                    if ((positions as any)[node.id]) {
                        node.fx = (positions as any)[node.id].x;
                        node.fy = (positions as any)[node.id].y;
                    }
                });
            }

            // Restore positions on load
            restorePositions();

            ForceGraph2D()(containerRef.current)
                .width(containerRef.current.clientWidth)
                .height(containerRef.current.clientHeight)
                .graphData(gData)
                .zoom(11) // Set default zoom to 2x
                .nodeColor(() => 'rgba(0,0,0,0)')
                .nodeCanvasObjectMode(() => 'before')
                .onNodeDragEnd((node: any) => {
                    node.fx = node.x;
                    node.fy = node.y;
                    savePositions(); // Auto-save on drag
                })
                .onNodeHover((node: any) => {
                    highlightNodes.clear();
                    highlightLinks.clear();
                    if (node) {
                        highlightNodes.add(node);
                        node.neighbors.forEach((neighbor: any) => highlightNodes.add(neighbor));
                        node.links.forEach((link: any) => highlightLinks.add(link));
                    }
                    hoverNode = node || null;
                })
                .onLinkHover((link: any) => {
                    highlightNodes.clear();
                    highlightLinks.clear();
                    if (link) {
                        highlightLinks.add(link);
                        highlightNodes.add(link.source);
                        highlightNodes.add(link.target);
                    }
                })
                .onLinkClick((link: any) => {
                    const sourceNode = gData.nodes.find(n => n.id === link.source);
                    const targetNode = gData.nodes.find(n => n.id === link.target);
                    console.log('Connection clicked:', {
                        source: sourceNode,
                        target: targetNode,
                        link: link
                    });
                })
                .autoPauseRedraw(false)
                .nodeCanvasObject((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                    const baseSize = 0.5; // base logical radius
                    const maxRadius = 3; // maximum radius in pixels
                    const radius = Math.min(baseSize * globalScale, maxRadius); // scales with zoom but caps at maxRadius

                    // draw circle (always)
                    ctx.fillStyle = '#5D7670';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.fill();

                    // add white border for hovered nodes
                    if (highlightNodes.has(node)) {
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
                        ctx.strokeStyle = '#ffffff';
                        ctx.lineWidth = 0.2;
                        ctx.stroke();
                    }

                    // always draw label
                    const label = node.name || 'Service';
                    const fontSize = 12 / globalScale; // keep text readable
                    ctx.fillStyle = '#ffffff';
                    ctx.font = `${fontSize}px sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(label, node.x, node.y);
                })
                .nodeRelSize(4)
                .linkColor(() => '#bbbbbb')
                .linkWidth((link: any) => highlightLinks.has(link) ? 5 : 1)
                .linkLineDash((link: any) => link.async && [1, 1])
                .linkDirectionalArrowLength(2)
                .linkLabel((link: any) => {
                    const sourceNode = gData.nodes.find(n => n.id === link.source.id);
                    const targetNode = gData.nodes.find(n => n.id === link.target.id);

                    let label = `<b>${link.source.id} → ${link.target.id}</b>`;

                    if (link.connections) {
                        Object.entries(link.connections).forEach(([type, count]) => {
                            label += `<br>${type}: ${count}`;
                        });
                    }

                    return label;
                })
                .linkLabelStyle({
                    backgroundColor: '#bbbbbb',
                    color: '#000000',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontFamily: 'sans-serif'
                });

            // Dash animation for async links
            const dashLen = 1;
            const gapLen = 1;
            const st = +new Date();
            const dashAnimateTime = 300; // time to animate a single dash

            (function animate() {
                const t = ((+new Date() - st) % dashAnimateTime) / dashAnimateTime;
                const lineDash = t < 0.5 ? [0, gapLen * t * 2, dashLen, gapLen * (1 - t * 2)] : [dashLen * (t - 0.5) * 2, gapLen, dashLen * (1 - (t - 0.5) * 2), 0];

                ForceGraph2D()(containerRef.current)
                    .linkLineDash((link: any) => link.async && lineDash);

                requestAnimationFrame(animate);
            })(); // IIFE

        })();

        return () => {
            mounted = false;
            if (containerRef.current) containerRef.current.innerHTML = "";
        };
    }, [width, height]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full overflow-hidden rounded-xl"
        />
    );
}


