"use client"
import { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const backgroundStarsRef = useRef<any[]>([]);
    const backgroundGradientRef = useRef<CanvasGradient | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const c = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(c);
        };

        window.addEventListener('resize', handleResize);

        class Star {
            x: number;
            y: number;
            radius: number;
            color: string;

            constructor(x: number, y: number, radius: number, color: string) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
            }

            draw(c: CanvasRenderingContext2D) {
                c.save();
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.shadowColor = '#E3EAEF';
                c.shadowBlur = 20;
                c.fill();
                c.closePath();
                c.restore();
            }
        }

        function createMountainRange(c: CanvasRenderingContext2D, mountainAmount: number, height: number, color: string) {
            for (let i = 0; i < mountainAmount; i++) {
                const mountainWidth = canvas.width / mountainAmount;
                c.beginPath();
                c.moveTo(i * mountainWidth, canvas.height);
                c.lineTo(i * mountainWidth + mountainWidth + 0.2 * canvas.height, canvas.height);
                c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
                c.lineTo(i * mountainWidth - 0.2 * canvas.height, canvas.height);
                c.fillStyle = color;
                c.fill();
                c.closePath();
            }
        }

        function init(c: CanvasRenderingContext2D) {
            backgroundStarsRef.current = [];
            for (let i = 0; i < 200; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 3;
                backgroundStarsRef.current.push(new Star(x, y, radius, 'white'));
            }

            const backgroundGradient = c.createLinearGradient(0, 0, canvas.width, canvas.height);
            backgroundGradient.addColorStop(0, '#171e26');
            backgroundGradient.addColorStop(1, '#3f586b');
            backgroundGradientRef.current = backgroundGradient;
        }

        function animate() {
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.fillStyle = backgroundGradientRef.current!;
            c.fillRect(0, 0, canvas.width, canvas.height);

            backgroundStarsRef.current.forEach(star => star.draw(c));
            createMountainRange(c, 1, canvas.height * 0.6, '#384551'); // front layer
            createMountainRange(c, 2, canvas.height * 0.5, '#2B3843'); // middle layer
            createMountainRange(c, 3, canvas.height * 0.4, '#26333E'); // back layer

            requestAnimationFrame(animate);
        }

        init(c);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
