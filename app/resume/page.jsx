
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';




const team = [
  {
    img: '/assets/Team/loki.jpg',
    name: 'Abdulrahman Nada',
  },
    {
    img: '/assets/Team/beto.jpg',
    name: 'Ebtehal Neseem',
  },
    {
    img: '/assets/Team/خالد.jpg',
    name: 'Khaled saied',
  },
    {
    img: '/assets/Team/mis.jpg',
    name: 'MISARAH EL-SHAFEI',
  },
  {
    img: '/assets/Team/jo.jpg',
    name: 'AYoussef Mansour',
  },
  {
    img: '/assets/Team/عائشه.jpg',
    name: 'Abdulrahman Nada',
  },
  {
    img: '/assets/Team/يسري.jpg',
    name: 'Abdulrahman Nada',
  },
      {
    img: '/assets/Team/boshra.jpg',
    name: 'Boshra Hassan',
  },
  {
    img: '/assets/Team/node.jpg',
    name: 'Nadia Waleed',
  },
  {
    img: '/assets/Team/sot.jpg',
    name: 'Asmaa Khaled',
  },
  {
    img: '/assets/Team/fatme.jpg',
    name: 'Fatma Arfat',
  },
  {
    img: '/assets/Team/soma.jpg',
    name: 'Seham Ashraf',
  },
  {
    img: '/assets/Team/so.jpg',
    name: 'Abdulrahman Nada',
  },
]
const page = () => {
 return (
    <section>
      <div className='h-44 flex justify-center items-center bg-black'>
        <h1 className='text-white text-6xl'>Our Team</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-6 my-4'>
        {team.map((team , index) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={team.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {team.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          )
        })}
      </div>
    </section>
  )
}

export default page
