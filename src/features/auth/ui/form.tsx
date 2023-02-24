import { Box, Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { authModel } from "entities/auth";
import { useDispatch } from "react-redux";
import { AuthFormParams } from "../model";
import { useNavigate } from "react-router";

export const AuthForm = ({ toggle }: AuthFormParams) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = authModel.useGetUserState();
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        authModel.setAuthState(user, dispatch);
        toggle.close();
        navigate("/profile");
      }}
      padding="20px"
      maxWidth="200px"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label={t("auth.username")}
        name="username"
        autoComplete="username"
        autoFocus
        onChange={(e) =>
          authModel.setUserState({ ...user, username: e.target.value }, dispatch)
        }
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t("auth.password")}
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) =>
          authModel.setUserState({ ...user, password: e.target.value }, dispatch)
        }
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {t("auth.signIn")}
      </Button>
    </Box>
  );
};
