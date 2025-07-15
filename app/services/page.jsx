"use client"
import Link from "next/link"


const services = [
  {
    num: '01',
    img: '/assets/servis/front1.jpg',
     slug: 'front-end',
    title: 'Course Front-End',
    description: 'لو نفسك تبني مواقع شكلها حلو وتشتغل بشكل احترافي، كورس Front-End هيعلمك من أول أساسيات التصميم لحد ما تبني موقعك بنفسك، اضغط هنا واعرف التفاصيل 👇',
  },
  {
    num: '02',
    img: '/assets/servis/b1.jpg',
     slug: 'back-end',
    title: 'Course Back-End',
    description: 'الكورس ده هيعلمك تبني أساس قوي لأي موقع وتشتغل على الجزء اللي ورا الكواليس، زي قواعد البيانات والسيرفرات، عشان تطوّر نظام يشغل الموقع كله بكفاءة، وتقدر تعرف التفاصيل كاملة من هنا 👇',
  },
  {
    num: '03',
    img: '/assets/servis/mobileApp.jpg',
    slug: 'mobile-app',
    title: 'Course Moblie Application',
    description: 'الكورس ده هيساعدك تتعلم إزاي تصمّم وتجهز تطبيقات موبايل من الصفر لحد ما ترفعها على المتجر، سواء لأندرويد أو iOS، بخطوات عملية وبسيطة، لو عايز تعرف التفاصيل، اضغط هنا 👇',
  },
  {
    num: '04',
    img: '/assets/servis/fullstack.png',
    title: 'Full Stack Development',
    slug: 'full-stack',
    description: 'كورس Full Stack هيدربك على كل جوانب تطوير المواقع  من تصميم الواجهة الأمامية لحد إدارة قواعد البيانات والسيرفرات، عشان تقدر تبني موقع كامل بإيدك من الألف للياء اضغط هنا واعرف التفاصيل 👇',
  },
  {
    num: '05',
    img: '/assets/servis/MEN.jpg',
    slug: 'mentorship',
    title: 'Mentorship Service',
    description: 'لو حاسس إنك محتاج حد يمشي معاك في السكة ويوجهك؟ خدمة المنتور هتوصلك بمبرمج محترف يساعدك، يراجع شغلك، ويجاوبك على أي سؤال، اضغط هنا واعرف التفاصيل 👇'},
  {
    num: '06',
    img: '/assets/servis/menn.jpg',
    slug: 'programming-grant',
    title: 'Programming grant',
    description: 'لو أنت خريج حاسبات أو مخلص كورس برمجة، إحنا بنقدملك تدريب مجاني لمدة 3 شهور تطبق فيه اللي اتعلمته وتكسب خبرة تؤهلك لسوق العمل، اضغط هنا واعرف التفاصيل 👇',
  },
  {
    num: '07',
    img: '/assets/servis/ter.jpg',
    slug: 'training-service',
    title: 'Training Service',
    description: 'لو مش عارف تبدأ منين أو تختار أنهي مجال في البرمجة، إحنا بنقدملك منحة شاملة فيها كل حاجة: Front-End، Back-End، Full Stack، وكمان Mobile Application. لو عايز تتعلم البرمجة من أولها لآخرها، المنحة دي معمولة ليك! اضغط هنا واعرف التفاصيل 👇',
  }
  
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-12 xl:px-0 ">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <img src={service.img} alt={service.title} className="w-full"/>
            <div className="w-16 h-16 mb-4 text-primary">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-right">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="text-blue-500">
              اعرف المزيد
            </Link>
          </div>
        ))}
      </section>
      <Link href='/contact'>
        <button className="fixed bottom-5 right-5 bg-[#16323e] text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
          %50 <span>شترك بخصم</span>
        </button>
      </Link>
    </section>
  )
}

export default Services
