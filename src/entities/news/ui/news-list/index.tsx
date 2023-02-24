import { NewsListParams } from "./types";
import { NewsCard } from "../news-card";
import { Box } from "@mui/material";

export const NewsList = ({ data }: NewsListParams) => (
  <Box display="grid" padding="15px" gridTemplateColumns="repeat(4,1fr)" gap={2}>
    {data.map((el) => (
      <NewsCard key={el.title} {...el} />
    ))}
  </Box>
);
