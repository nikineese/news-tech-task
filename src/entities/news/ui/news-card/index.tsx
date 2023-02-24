import { News } from "shared/api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const NewsCard = ({ url, urlToImage, content, title }: News) => (
  <Card>
    <CardMedia
      component="img"
      height="200"
      image={`${urlToImage || "default_img.png"}`}
      alt="Image not found"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => window.open(url, "blank")}>Read More</Button>
    </CardActions>
  </Card>
);
