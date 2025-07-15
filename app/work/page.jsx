import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';

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
    name: 'Khaled Saied ',
  },
    {
    img: '/assets/Team/mis.jpg',
    name: 'MISARAH EL-SHAFEI',
  },
  {
    img: '/assets/Team/jo.jpg',
    name: 'Youssef Mansour',
  },
  {
    img: '/assets/Team/عائشه.jpg',
    name: 'Aisha Khamis',
  },
  {
    img: '/assets/Team/يسري.jpg',
    name: 'Abdulrahman Yossre',
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
    name: 'Fatma Arafat',
  },
  {
    img: '/assets/Team/soma.jpg',
    name: 'Seham Ashraf',
  },
  {
    img: '/assets/Team/so.jpg',
    name: 'Esraa Fahmy',
  },
]

const page = () => {
  return (
    <section>
      <div className='h-44 flex justify-center items-center bg-black'>
        <h1 className='text-white text-6xl font-bold'>Our Team</h1>
      </div>
<div className="flex flex-wrap justify-center gap-6 my-8">
  {team.map((member, index) => (
    <div
      key={index}
      className="w-[250px] bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300"
    >
      <div className="w-full h-[250px]">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
      </div>
    </div>
  ))}
</div>

      <Link href='/contact'>
        <button className="fixed bottom-5 right-5 bg-[#16323e] text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
          %50 <span>شترك بخصم</span>
        </button>
      </Link>
    </section>
  )
}

export default page
