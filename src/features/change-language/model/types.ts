import { Languages } from "shared/config/i18n";
import { Toggle } from "shared/lib/hooks";

export type ChooseLanguageParams = {
  language: Languages;
  toggle: Toggle;
};
