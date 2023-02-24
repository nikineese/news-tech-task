import LanguageIcon from "@mui/icons-material/Language";
import { List, ListItem } from "@mui/material";
import { useRef } from "react";
import { ChooseLanguage } from "./choose-language";
import { Languages } from "shared/config/i18n";
import { useTogglePopover } from "shared/lib/hooks";
import { IconPopover } from "shared/lib/ui";

export const ChangeLanguage = () => {
  const iconRef = useRef(null);
  const toggle = useTogglePopover();
  return (
    <IconPopover
      icon={
        <LanguageIcon onClick={() => toggle.open()} ref={iconRef} cursor="pointer" />
      }
      popoverContent={
        <List>
          <ListItem disablePadding>
            <ChooseLanguage language={Languages.ENGLISH} toggle={toggle} />
          </ListItem>
          <ListItem disablePadding>
            <ChooseLanguage language={Languages.UKRAINIAN} toggle={toggle} />
          </ListItem>
        </List>
      }
      toggle={toggle}
      anchorEl={iconRef.current}
    />
  );
};
