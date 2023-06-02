import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("1");

    const onTabsChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const goToBankPage = useCallback(() => navigate("/bank"), [navigate]);

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                    <Tabs value={value} onChange={onTabsChange}>
                        <Tab value={"1"} label={"Bank"} onClick={goToBankPage} />
                        <Tab value={"2"} label={"Client"} />
                        <Tab value={"3"} label={"ATM"} />
                        <Tab value={"4"} label={"Operations"} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
