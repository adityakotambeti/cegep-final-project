import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PlaceCards.css'

export default function PlaceCards({title, description, imagePath, cardLink}) {
    return (
        <div>
            <Card className="cardComponent">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={imagePath}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button href={cardLink} size="small" color="primary">
                        Learn more
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}