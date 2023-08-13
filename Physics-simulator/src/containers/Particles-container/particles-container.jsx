import React, { useState } from "react";
import ParticlesGas from "../../components/Particles/particles";
import "./particles-container.css";

const ParticlesContainer = () => {
    const [particleSpeed, setParticleSpeed] = useState(6);

    const handleSpeedChange = (event) => {
        const newSpeed = parseInt(event.target.value);
        setParticleSpeed(newSpeed);
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
                    min={1}
                    max={20}
                />
            </div>
            <ParticlesGas particleSpeed={particleSpeed} />
        </div>
    );
};

export default ParticlesContainer;
