import { AppBar, Box, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { HeaderLink } from "./link";
import { authModel } from "entities/auth";
import { Auth } from "features/auth";
import { ChangeLanguage } from "features/change-language";

export const Header = () => {
  const { t } = useTranslation();
  const isAuth = authModel.useGetIsAuthState();
  return (
    <AppBar position="static">
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Toolbar>
          <HeaderLink href="/">{t("header.home")}</HeaderLink>
          <HeaderLink href="/news">{t("header.news")}</HeaderLink>
        </Toolbar>
        <Toolbar>
          <ChangeLanguage />
          {isAuth ? (
            <HeaderLink href="/profile">{t("header.profile")}</HeaderLink>
          ) : (
            <Auth />
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
