"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const options = {
    preset: "snow",
};

export default function RenderParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadSnowPreset(engine);
    }, []);

    return <Particles id="tsparticles" options={options} init={particlesInit} />;
}
