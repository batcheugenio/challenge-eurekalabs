import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { capitalize } from 'lodash';

export default function ProductCard({ title, product_type, quantitySold, image }) {
  return (
    <Card sx={{flexGrow: 1}}>
      <CardMedia
        align='left'
        component='img'
        height='220'
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
        src={image.src}
        alt={image.alt}
      />
      <CardContent>
        <Typography gutterBottom align='left' variant='h5'>
          <b>{title}</b>
        </Typography>
        <Typography align='left' variant='body1' color='text.secondary'>
          {capitalize(product_type)}
        </Typography>
        <Typography align='left' variant="body1" color='text.secondary'>
          Quantity Sold: {quantitySold}
        </Typography>
      </CardContent>
    </Card>
  );
}