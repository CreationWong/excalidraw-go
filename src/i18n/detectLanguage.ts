// src/i18n/detectLanguage.ts
import { LANGUAGE_MAP, DEFAULT_LANG } from "./languageConfig";

export function detectLanguage(): string {
    const browserLang = navigator.language.toLowerCase();

    if (LANGUAGE_MAP[browserLang as keyof typeof LANGUAGE_MAP]) {
        return LANGUAGE_MAP[browserLang as keyof typeof LANGUAGE_MAP];
    }

    for (const [key, value] of Object.entries(LANGUAGE_MAP)) {
        if (browserLang.startsWith(key)) {
            return value;
        }
    }

    return DEFAULT_LANG;
}