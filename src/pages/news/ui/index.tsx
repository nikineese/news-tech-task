import { NewsList, newsModel } from "entities/news";
import { useDispatch } from "react-redux";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { LoadMore } from "features/load-more";
import { useRefetch } from "shared/lib/hooks";
import { MAX_PAGES } from "shared/lib/constants";
const NewsPage = () => {
  const dispatch = useDispatch();

  const page = newsModel.useGetPage();
  const news = newsModel.useGetNews();
  const isEmpty = newsModel.useIsNewsListEmpty();

  const { isFetching, refetch } = newsModel.getNewsListAsync()({
    page,
    dispatch,
  });

  useRefetch(refetch, [page]);

  if (isFetching)
    return (
      <Stack marginTop="50px" alignItems="center">
        <CircularProgress className="overlay" size={100} />
      </Stack>
    );
  if (isEmpty) return <Typography>News is empty</Typography>;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <NewsList data={news} />
      {page < MAX_PAGES && <LoadMore dispatch={dispatch} />}
    </Box>
  );
};

export default NewsPage;
