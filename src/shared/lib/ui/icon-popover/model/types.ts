import React from "react";
import { Toggle } from "../../../hooks";

export type IconPopoverParams = {
  icon: React.ReactNode;
  popoverContent: React.ReactNode;
  toggle: Toggle;
  anchorEl: Element | null;
};
