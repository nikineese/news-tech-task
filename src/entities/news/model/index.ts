import {
  createSelector,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { News } from "shared/api/news";
import { useQuery } from "react-query";
import { AxiosPromise, AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { NewsApiResponse } from "shared/api/news/types";
import { isArraysHasEqualElem } from "shared/lib/isArraysHasEqualElems";
import { NewsApiRequest } from "./types";
import { LANGUAGE, NEWS_LIST_QUERY_KEY, PAGE_SIZE, queryConfig } from "./constants";
import { api } from "shared/api/base";
import { BASE_URL } from "shared/config/get-env";

export const initialState: {
  data: News[];
  page: number;
} = {
  data: [],
  page: 1,
};
export const newsModel = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsData: (state, { payload }: PayloadAction<NewsApiResponse>) => {
      state.data = isArraysHasEqualElem(payload.articles, state.data, "title")
        ? state.data
        : state.data.concat(payload.articles);
    },
    loadMore: (state) => {
      state.page += 1;
    },
  },
});

export const useGetNews = () => useSelector((state: RootState) => state.news.data);
export const useGetPage = () => useSelector((state: RootState) => state.news.page);
export const useIsNewsListEmpty = (): boolean =>
  useSelector(
    createSelector(
      (state: RootState) => state.news.data,
      (news) => Object.keys(news).length <= 0
    )
  );

export const getNewsList = (page?: number): AxiosPromise<NewsApiResponse> =>
  api.get(`${BASE_URL}?${LANGUAGE}&pagesize=${PAGE_SIZE}&page=${page}`);

export const getNewsListAsync =
  () =>
  ({ page, dispatch }: NewsApiRequest) =>
    useQuery<AxiosResponse<NewsApiResponse>>(
      NEWS_LIST_QUERY_KEY,
      () => getNewsList(page),
      {
        onSuccess: ({ data }) => dispatch(newsModel.actions.setNewsData(data)),
        ...queryConfig,
      }
    );
export const loadMoreData = (dispatch: Dispatch) => {
  return dispatch(newsModel.actions.loadMore());
};

export const newsReducer = newsModel.reducer;
