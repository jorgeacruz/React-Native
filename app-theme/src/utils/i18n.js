import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import bra from './bra.json';
import usa from './usa.json';
import spa from './spa.json';


i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'bra',
    resources: {
        bra: bra,
        usa: usa,
        spa: spa
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;