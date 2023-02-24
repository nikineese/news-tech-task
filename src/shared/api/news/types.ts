export type NewsApiResponse = {
  totalResults: number;
  status: string;
  articles: News[];
};
export type News = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
