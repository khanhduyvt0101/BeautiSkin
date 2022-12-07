import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { en, es } from "@/i18n";

const i18n = new I18n({
  en: en,
  es: es,
});

i18n.enableFallback = true;
i18n.locale = Localization.locale;

export { i18n as Localizer };
