import { newsModel } from "entities/news";
import { LoadMoreParams } from "../model";
import { LoadMoreButton } from "./styled";

export const LoadMore = ({ dispatch }: LoadMoreParams) => (
  <LoadMoreButton
    onClick={() => newsModel.loadMoreData(dispatch)}
    variant="contained"
  >
    Load More
  </LoadMoreButton>
);
