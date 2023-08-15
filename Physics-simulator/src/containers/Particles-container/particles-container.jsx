import React, { useState } from "react";
import ParticlesGas from "../../components/Particles/particles";
import "./particles-container.css";

const ParticlesContainer = () => {
    const [particleSpeed, setParticleSpeed] = useState(6);
    const [particleCount, setParticleCount] = useState(5);
    const [density, setDensity] = useState(1);

    const handleSpeedChange = (event) => {
        const newSpeed = parseInt(event.target.value);
        setParticleSpeed(newSpeed);
    };

    const handleParticleCountChange = (event) => {
        const newParticleCount = parseInt(event.target.value);
        setParticleCount(newParticleCount);
    };

    const handleSolidButtonClick = () => {
        setParticleSpeed(0);
        setParticleCount(10000);
    };

    const handleLiquidButtonClick = () => {
        setParticleSpeed(1);
        setParticleCount(800);
        setDensity(0.5);
    };

    const handleGaseousButtonClick = () => {
        setParticleSpeed(5);
        setParticleCount(300);
    };

    const particlesOptions = {
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: particleCount,
        },
    };

    return (
        <div className="particles-page">
            <div className="speed-input">
                <label htmlFor="speedInput">Velocidad de partículas: </label>
                <input
                    type="number"
                    id="speedInput"
                    value={particleSpeed}
                    onChange={handleSpeedChange}
                    min={0}
                    max={20}
                />
            </div>
            <div className="particle-count-input">
                <label htmlFor="particleCountInput">Cantidad de partículas: </label>
                <input
                    type="range"
                    id="particleCountInput"
                    value={particleCount}
                    onChange={handleParticleCountChange}
                    min={0}
                    max={2000}
                />
                <span>{particleCount}</span>
            </div>
            <button onClick={handleSolidButtonClick}>Sólido</button>
            <button onClick={handleLiquidButtonClick}>Líquido</button>
            <button onClick={handleGaseousButtonClick}>Gaseoso</button>
            <ParticlesGas particleSpeed={particleSpeed} particlesOptions={particlesOptions} />
        </div>
    );
};

export default ParticlesContainer;
