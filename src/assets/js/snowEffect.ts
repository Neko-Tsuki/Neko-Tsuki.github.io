class SnowEffect {
    constructor() {
        this.snowflakes = [];
        this.running = false; // 控制特效的开关
        this.animationFrameId = null;
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
        cancelAnimationFrame(this.animationFrameId);
        this.removeCanvas();
    }

    createCanvas() {
        // 创建并设置 Canvas
        this.canvas = document.createElement("canvas");
        this.canvas.id = "snow-canvas";
        this.canvas.style.position = "fixed";
        this.canvas.style.top = "0";
        this.canvas.style.left = "0";
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.style.pointerEvents = "none"; // 不影响鼠标事件
        this.canvas.style.zIndex = "1000";
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.resizeCanvas();

        window.addEventListener("resize", this.resizeCanvas.bind(this));
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
        const numSnowflakes = 50; // 雪花数量
        for (let i = 0; i < numSnowflakes; i++) {
            this.snowflakes.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 4 + 1, // 雪花半径 1~5
                speedX: Math.random() * 1 - 0.5, // 左右飘动
                speedY: Math.random() * 2 + 1, // 向下速度
            });
        }
    }

    animate() {
        if (!this.running) return; // 如果特效关闭，停止动画

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snowflakes.forEach((flake) => {
            flake.x += flake.speedX;
            flake.y += flake.speedY;

            // 雪花超出屏幕底部时重置到顶部
            if (flake.y > window.innerHeight) {
                flake.y = -flake.radius;
                flake.x = Math.random() * window.innerWidth;
            }

            this.drawSnowflake(flake);
        });

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    }

    drawSnowflake(flake) {
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
    }
}

export default SnowEffect;
