import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./common/Theme/ThemeOptions";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/rootStore";
import { Provider } from "react-redux";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={themeOptions}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
