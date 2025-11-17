import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import lo from "./locales/lo.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "vi",
  fallbackLocale: "en",
  messages: {
    en,
    vi,
    lo,
  },
});

export default i18n;
