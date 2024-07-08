import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CarCard = ({
  image,
  price,
  brand,
  model,
  year,
  views,
  handleClickOpen,
}) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt={`${brand} ${model}`}
        image={image}
        className="h-[140px] object-cover object-center"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand} {model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ano: {year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visualizações: {views}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClickOpen()}>
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
};
