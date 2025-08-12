// src/App.tsx
import {Excalidraw, MainMenu, WelcomeScreen} from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { detectLanguage } from "./i18n/detectLanguage";

export default function App() {
    const [langCode, setLangCode] = useState<string>("en");

    useEffect(() => {
        setLangCode(detectLanguage());
    }, []);

    return (
        <div className="excalidraw-container" style={{ height: "100vh" }}>
            <Excalidraw langCode={langCode} >
                <MainMenu>
                    <MainMenu.Group title="Excalidraw">
                        <MainMenu.DefaultItems.LoadScene/>
                        <MainMenu.DefaultItems.SaveToActiveFile/>
                        <MainMenu.DefaultItems.Export/>
                        <MainMenu.DefaultItems.SaveAsImage/>
                        <MainMenu.DefaultItems.SearchMenu/>
                        <MainMenu.DefaultItems.ClearCanvas/>
                    </MainMenu.Group>
                    <MainMenu.Group>
                        <MainMenu.DefaultItems.Help/>
                        <MainMenu.DefaultItems.ToggleTheme/>
                        <MainMenu.DefaultItems.ChangeCanvasBackground/>
                    </MainMenu.Group>
                </MainMenu>
                <WelcomeScreen />
            </Excalidraw>
        </div>
    );
}