import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const MyCard = (props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
                <Typography variant="h2">
                    {props.price}
                </Typography>
            </CardContent>

            <CardActions>
                {props.onBuy && (
                    <Button onClick={props.onBuy}>Купить</Button>
                )}
            </CardActions>

        </Card>
    )
}