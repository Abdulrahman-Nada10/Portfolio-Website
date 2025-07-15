'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { FaCheck } from "react-icons/fa";
const Staars = () => {
  const theme = useTheme();

  return (
    <section className="w-full">
        <div className="flex flex-col items-center justify-center m-4">
           <Card sx={{ display: 'flex' }} className='flex gap-6'>
              <div className='p-2 text-right'>
                <h1>🎯 ليه تشترك معانا؟</h1>
                <h2>:لأننا معاك طول الطريق</h2>
                <div className='flex items-center justify-end my-5'> متابعة شخصية ودعم مستمر طول فترة الكورس <FaCheck className='text-emerald-400'/></div>
                <div className='flex items-center justify-end my-5'>  شرح بسيط وسهل يناسب كل المستويات <FaCheck className='text-emerald-400'/></div>
                <div className='flex items-center justify-end my-5'> سعر بسيط مناسب ليك <FaCheck className='text-emerald-400'/></div>
                <div className='flex items-center justify-end my-5'> محاضرات لايف وتفاعلية، ومسجلة تقدر ترجع ليها في أي وقت يعجبك <FaCheck className='text-emerald-400'/></div>
                <div className='flex items-center justify-end my-5'> تقدر تحضر سيشن مجانية قبل ما تشترك، وتشوف بنفسك جودة الشرح، وتقرر براحتك من غير أي ضغط <FaCheck className='text-emerald-400'/></div>
              </div>
            <CardMedia
              component="img"
              sx={{ width: 500 }}
              image="./assets\hero\hero.jpg" // صورة بديلة مؤقتًا
              alt="Live from space album cover"
            />
          </Card>
        </div>
    </section>
  );
};

export default Staars;
