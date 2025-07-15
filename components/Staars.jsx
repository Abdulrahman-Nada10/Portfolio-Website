'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { FaCheck } from "react-icons/fa";

const Staars = () => {
  const theme = useTheme();

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4">
        <Card className="flex flex-col lg:flex-row items-center gap-6 shadow-md p-4">
          <div className="p-2 text-right max-w-md">
            <h1 className="text-xl font-bold">🎯 ليه تشترك معانا؟</h1>
            <h2 className="text-lg my-2">:لأننا معاك طول الطريق</h2>

            <div className="flex items-center justify-end my-3 text-sm">
              متابعة شخصية ودعم مستمر طول فترة الكورس <FaCheck className="text-emerald-400 ms-2" />
            </div>
            <div className="flex items-center justify-end my-3 text-sm">
              شرح بسيط وسهل يناسب كل المستويات <FaCheck className="text-emerald-400 ms-2" />
            </div>
            <div className="flex items-center justify-end my-3 text-sm">
              سعر بسيط مناسب ليك <FaCheck className="text-emerald-400 ms-2" />
            </div>
            <div className="flex items-center justify-end my-3 text-sm">
              محاضرات لايف وتفاعلية، ومسجلة تقدر ترجع ليها في أي وقت يعجبك <FaCheck className="text-emerald-400 ms-2" />
            </div>
            <div className="flex items-center justify-end my-3 text-sm">
              تقدر تحضر سيشن مجانية قبل ما تشترك، وتشوف بنفسك جودة الشرح، وتقرر براحتك من غير أي ضغط <FaCheck className="text-emerald-400 ms-2" />
            </div>
          </div>

          <CardMedia
            component="img"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
            image="./assets/hero/hero.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </section>
  );
};

export default Staars;
