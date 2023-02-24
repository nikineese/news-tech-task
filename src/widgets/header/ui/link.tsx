import React, { PropsWithChildren } from "react";
import { HeaderButton } from "./styled";
import { useNavigate } from "react-router";
import { HeaderButtonParams } from "../model";

export const HeaderLink = ({
  href,
  children,
  ...rest
}: PropsWithChildren<HeaderButtonParams>) => {
  const navigate = useNavigate();
  return (
    <HeaderButton variant="contained" onClick={() => navigate(href)} {...rest}>
      {children}
    </HeaderButton>
  );
};
