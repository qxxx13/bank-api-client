import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { ParticlesBackground } from "./common/ParticlesBackground/ParticlesBackground";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./common/Theme/ThemeOptions";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions}>
            <ParticlesBackground />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
