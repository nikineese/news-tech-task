import { ChooseLanguageParams } from "../model";
import { useTranslation } from "react-i18next";
import { ListItemButton, ListItemText } from "@mui/material";
import { Languages } from "shared/config/i18n";

export const ChooseLanguage = ({ language, toggle }: ChooseLanguageParams) => {
  const { i18n } = useTranslation();
  return (
    <ListItemButton
      onClick={() => {
        i18n.changeLanguage(language);
        toggle.close();
      }}
    >
      <ListItemText
        primary={language === Languages.ENGLISH ? "English" : "Ukrainian"}
      />
    </ListItemButton>
  );
};
