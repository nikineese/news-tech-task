import { Dispatch } from "@reduxjs/toolkit";

export type NewsApiRequest = {
  page?: number;
  dispatch: Dispatch;
};
