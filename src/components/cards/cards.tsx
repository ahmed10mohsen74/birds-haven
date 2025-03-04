import "./cards.css";
import image1 from "../../assets/image/pigon-3.jpg";
import image2 from "../../assets/image/pigon-4.jpg";

const Cards = () => {
  const birdsData = [
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 2,
      name: "صوافه",
      info: "", // لا توجد معلومات لهذا العنصر
      image: image2,
      phone: "",
    },
    {
      id: 3,
      name: "صوافه",
      image: image2,
      // لم يتم إدخال أي بيانات في هذا العنصر
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
    {
      id: 1,
      name: "قطقاطي",
      info: "دكر شاب للنش || المكان شارع فاروق",
      image: image1,
      phone: "201279734467",
    },
  ];

  return (
    <div className="content p-8">
      <div className="gri">
        {birdsData.map((bird) => (
          <div key={bird.id} className="flex flex-col items-center">
            {/* بطاقة المحتوى */}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-80 transition hover:shadow-xl">
              <img
                src={bird.image || "/images/default.jpg"} // صورة افتراضية إذا لم تكن الصورة موجودة
                alt={bird.name || "طائر غير معروف"}
                className="w-full h-48 object-contain bg-gray-100"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">
                  {bird.name || "اسم غير متوفر"}
                </h2>
                <p className="text-gray-600 my-2">
                  {bird.info || "لا يوجد معلومات"}
                </p>
              </div>
            </div>
            {/* زر واتساب مع رقم ورسالة مخصصة */}
            <a
              href={`https://wa.me/${
                bird.phone || "201000000000"
              }?text=مرحبا، أريد الاستفسار عن ${bird.name || "هذا العنصر"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[-20px] bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              تواصل معنا على واتساب
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
