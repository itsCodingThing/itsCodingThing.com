"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function RenderParticles() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            className="relative -z-10"
            id="tsparticles"
            init={particlesInit}
            options={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3,
                        },
                    },
                    move: {
                        enable: true,
                        random: true,
                        speed: 2,
                        direction: "top",
                        out_mode: "out",
                    },
                },
            }}
        />
    );
}
