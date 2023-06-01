import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#59e8e8",
        },
        secondary: {
            main: "#00ff4c",
        },
        background: {
            default: "#313638",
            paper: "#4495af",
        },
        info: {
            main: "#007f29",
        },
    },
});
