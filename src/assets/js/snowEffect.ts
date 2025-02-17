class LeafFallEffect {
    private leaves: {
        x: number;
        y: number;
        speedX: number;
        speedY: number;
        angle: number;
        rotationSpeed: number;
        emoji: string;
        size: number;
    }[] = [];

    private running: boolean = false;
    private animationFrameId: number | null = null;
    private numLeaves: number = 50;
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;
    private emojis: string[] = ["🍀", "🍃"];

    start(): void {
        if (this.running) return;
        this.running = true;
        this.createCanvas();
        this.generateLeaves();
        this.animate();
    }

    stop(): void {
        this.running = false;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.removeCanvas();
    }

    private createCanvas(): void {
        if (this.canvas) return;
        this.canvas = document.createElement("canvas");
        this.canvas.id = "leaf-fall-canvas";
        Object.assign(this.canvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "1000",
            backgroundColor: "transparent"
        });
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        this.resizeCanvas();
        window.addEventListener("resize", this.resizeCanvas);
    }

    private removeCanvas(): void {
        if (this.canvas) {
            window.removeEventListener("resize", this.resizeCanvas);
            document.body.removeChild(this.canvas);
            this.canvas = null;
            this.ctx = null;
        }
    }

    private resizeCanvas = (): void => {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    };

    private generateLeaves(): void {
        this.leaves = Array.from({ length: this.numLeaves }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speedX: (Math.random() - 0.5) * 2,
            speedY: Math.random() * 2 + 1,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.03 + 0.01,
            emoji: this.emojis[Math.floor(Math.random() * this.emojis.length)],
            size: Math.random() * 20 + 10
        }));
    }

    private animate = (): void => {
        if (!this.running || !this.ctx || !this.canvas) return;

        const ctx = this.ctx, canvas = this.canvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const leaf of this.leaves) {
            leaf.x += leaf.speedX;
            leaf.y += leaf.speedY;
            leaf.angle += leaf.rotationSpeed;

            if (leaf.y > canvas.height) {
                leaf.y = -20;
                leaf.x = Math.random() * canvas.width;
            }

            this.drawLeaf(leaf);
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    };

    private drawLeaf(leaf: { x: number; y: number; angle: number; emoji: string; size: number }): void {
        if (!this.ctx) return;
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.angle);
        ctx.font = `${leaf.size}px sans-serif`;
        ctx.fillText(leaf.emoji, -leaf.size / 2, leaf.size / 3);
        ctx.restore();
    }
}

export default LeafFallEffect;
