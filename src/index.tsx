import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./common/Theme/ThemeOptions";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={themeOptions}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
