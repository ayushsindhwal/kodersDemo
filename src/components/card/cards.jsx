import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
const Cards = () => {
  return [0, 1, 2, 3].map((item) => (
    <Grid item xs>
      <Card elevation={6}>
        <CardContent className="card-content">
          <Typography gutterBottom variant="overline">
            Post
          </Typography>
          <Typography variant="h3">
          {Math.floor(Math.random() * 9999)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default Cards;
