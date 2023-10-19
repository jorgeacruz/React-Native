import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import pt from './pt.json';
import sp from './sp.json';

i18n.use(initReactI18next).init({
    compatibilityJSON:'v3',
    lng:'en', // linguagem inicial
    resources:{ //linguagens disponiveis
        en:en,
        pt:pt,
        sp:sp
    },
    react:{
        useSuspense:false,
    },
    interpolation:{
        escapeValue:false,
    }
})

export default i18n;