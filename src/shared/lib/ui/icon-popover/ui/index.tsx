import { Box, Popover } from "@mui/material";
import { IconPopoverParams } from "../model";

export const IconPopover = ({
  icon,
  popoverContent,
  toggle,
  anchorEl,
}: IconPopoverParams) => {
  return (
    <Box marginLeft="15px">
      {icon}
      <Popover
        open={toggle.isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() => toggle.close()}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {popoverContent}
      </Popover>
    </Box>
  );
};
