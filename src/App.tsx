import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ParticlesBackground } from "./common/ParticlesBackground/ParticlesBackground";
import { Router } from "./router/Router";

export const App = () => {
    return (
        <>
            <ParticlesBackground />
            <NavBar />
            <Router />
        </>
    );
};
