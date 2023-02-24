import { useTogglePopover } from "shared/lib/hooks";
import { useRef } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { IconPopover } from "shared/lib/ui";
import { AuthForm } from "./form";

export const Auth = () => {
  const toggle = useTogglePopover();
  const iconRef = useRef(null);

  return (
    <IconPopover
      icon={
        <LoginIcon cursor="pointer" ref={iconRef} onClick={() => toggle.open()} />
      }
      popoverContent={<AuthForm toggle={toggle} />}
      toggle={toggle}
      anchorEl={iconRef.current}
    />
  );
};
