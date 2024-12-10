class SnowEffect {

    snowflakes: any[]; // Declare the snowflakes property
    running: boolean;
    animationFrameId: number | null;
    numSnowflakes: number;
    private canvas: HTMLCanvasElement | null = null;
    private ctx: CanvasRenderingContext2D | null = null;

    constructor() {
        this.snowflakes = [];
        this.running = false; // 控制特效的开关
        this.animationFrameId = null;
        this.numSnowflakes = 50; // 雪花数量
    }

    start() {
        if (this.running) return; // 如果已经运行，则不再重复启动
        this.running = true;
        this.createCanvas();
        this.generateSnowflakes();
        this.animate();
    }

    stop() {
        this.running = false;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.removeCanvas();
    }

    createCanvas() {
        try {
            this.canvas = document.createElement("canvas");
            this.canvas.id = "snow-canvas";
            Object.assign(this.canvas.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: "1000"
            });
            document.body.appendChild(this.canvas);

            this.ctx = this.canvas.getContext("2d");
            this.resizeCanvas();
            window.addEventListener("resize", () => this.resizeCanvas());
        } catch (error) {
            console.error("Error creating canvas: ", error);
            this.running = false; // Set running to false if canvas creation fails
        }
    }

    removeCanvas() {
        if (this.canvas) {
            window.removeEventListener("resize", this.resizeCanvas.bind(this));
            document.body.removeChild(this.canvas);
            this.canvas = null;
        }
    }

    resizeCanvas() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }

    generateSnowflakes() {
        this.snowflakes = Array.from({ length: this.numSnowflakes }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 4 + 1,
            speedX: Math.random() - 0.5,
            speedY: Math.random() * 2 + 1,
        }));
    }

    animate() {
        if (!this.running || !this.ctx || !this.canvas) return; // Ensure ctx and canvas are available

        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const flake of this.snowflakes) {
            flake.x += flake.speedX;
            flake.y += flake.speedY;

            // 雪花超出屏幕底部时重置到顶部
            if (flake.y > canvas.height) {
                flake.y = -flake.radius;
                flake.x = Math.random() * canvas.width;
            }

            this.drawSnowflake(flake);
        }

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    }

    drawSnowflake(flake: any) {
        if (this.ctx) { // Check if ctx is not null
            this.ctx.beginPath();
            this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = "white";
            this.ctx.fill();
        } else {
            console.error("Canvas context is not initialized.");
        }
    }
}

export default SnowEffect;
