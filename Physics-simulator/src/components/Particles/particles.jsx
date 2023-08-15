import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./particles.css";

const ParticlesGas = ({ particleSpeed, onSpeedChange, particlesOptions }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Puedes realizar acciones adicionales aquí cuando las partículas se carguen si es necesario
    }, []);

    return (
        <div className="particles-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                          value: "#232741",
                        },
                      },
                      fullScreen: false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                            },
                            onHover: {
                                enable: false,
                            },
                            resize: true,
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: particleSpeed,
                            straight: false,
                        },
                        number: particlesOptions.number, // Usar la configuración de cantidad de partículas
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticlesGas;
