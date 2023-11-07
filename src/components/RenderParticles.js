"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const options = {
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
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            random: true,
            speed: 2,
            direction: "top",
            out_mode: "out",
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
            onClick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
            },
            repulse: {
                distance: 400,
                duration: 4,
            },
        },
    },
};

export default function RenderParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return <Particles id="tsparticles" options={options} init={particlesInit} />;
}
