import { useState } from "react";

export type Toggle = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useTogglePopover = () => {
  const [open, setOpen] = useState(false);
  return {
    isOpen: open,
    open: () => setOpen(true),
    close: () => setOpen(false),
  };
};
