import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 

function ListItem({product}) {
    return (
        <div>
            <Card>
                <CardHeader>{product.title}</CardHeader>
                <CardMedia img={product.image}></CardMedia>
            </Card>
        </div>
    )
}

export default ListItem
