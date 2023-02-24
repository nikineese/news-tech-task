import { authModel } from "../../";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const UserCard = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Box
      height="150px"
      gap="20px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4">{t("profile.message")}</Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => authModel.setAuthState({}, dispatch)}
      >
        {t("profile.logout")}
      </Button>
    </Box>
  );
};
