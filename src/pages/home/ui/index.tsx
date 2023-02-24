import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="calc(100vh - 64px)"
      fontSize="2.1em"
    >
      <Typography fontWeight="bold" margin="5px" variant="h2" textAlign="center">
        {t("home.title")}
      </Typography>
      <Typography variant="h5">{t("home.subtitle")}</Typography>
    </Box>
  );
};

export default HomePage;
