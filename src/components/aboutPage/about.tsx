import image from "../../assets/image/flying-bird-background-sunset.jpg";
import image2 from "../../assets/image/pigon-3.jpg";
import image3 from "../../assets/image/pigon-4.jpg";
import { useState } from "react";
import DataComponent from "./aboutComponent";

const About: React.FC = () => {
  const [info, setInfo] = useState("");
  const [show, setShow] = useState("");
  const [test, setTest] = useState<React.ReactNode>();
  const [showComponent, setShowComponent] = useState(false); // الحالة الافتراضية: مخفي

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* العنوان والمقدمة */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Welcome to our website! We are passionate about providing the best
        services and information about birds. Our mission is to educate and
        share knowledge about different bird species around the world.
      </p>

      {/* الصورة الكبيرة بالأعلى */}
      <div className="mt-8">
        <img
          src={image}
          alt="Birds"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 my-9">Discover</h2>
      {/* قسم - صورة يمين وكلام يسار */}
      <div className="flex flex-col md:flex-row  mt-16 gap-8 ">
        <div className="md:w-1/2 text-left ">
          <h2 className="text-2xl font-semibold text-gray-800">
            Discover the Beauty of Birds
          </h2>
          <p className="text-gray-600 mt-2">
            Birds are fascinating creatures that play a vital role in nature.
            Their ability to fly and their diverse species make them one of the
            most admired animals in the world.
          </p>
        </div>
        <div className="md:w-1/2 ">
          <img
            src={image2}
            alt="Bird in Nature"
            className="w-full rounded-lg shadow-lg "
          />
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 my-9">
        Conservation Efforts
      </h2>
      {/* قسم - صورة يسار وكلام يمين */}
      <div className="flex flex-col md:flex-row-reverse  mt-16 gap-8">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Conservation Efforts
          </h2>
          <p className="text-gray-600 mt-2">
            We are dedicated to preserving bird habitats and ensuring their
            safety in the wild. Join us in our mission to protect and learn more
            about these incredible creatures.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={image3}
            alt="Bird in Forest"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center p-4">
        <h2 className="text-2xl font-semibold text-blue-400 my-12">
          In this we will try
        </h2>

        {["about us", "about me"].map((item) => (
          <button
            key={item}
            onClick={() =>
              setInfo(
                item === "about us" ? "معلومات عن الجميع" : "معلومات عني فقط"
              )
            }
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg my-2"
          >
            {item}
          </button>
        ))}

        <p className="mt-4 text-lg font-medium">{info}</p>
      </div>
      <div>
        <h2> to show this</h2>
        {["buy", "sell"].map((item) => (
          <h2
            onClick={() =>
              setShow(item === "buy" ? "hello in buy" : "this is in sell")
            }
          >
            {item}
          </h2>
        ))}
        <p>{show}</p>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-400 my-6">
          Test Component
        </h2>
        {["show data", "dont show data"].map((item) => (
          <h2
            key={item}
            onClick={() =>
              setTest(
                item === "show data" ? (
                  <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Welcome!
                    </h3>
                    <p className="text-gray-600 mt-2">
                      This is some detailed content displayed when clicking
                      "show data".
                    </p>
                    <ul className="mt-2 text-left text-gray-700">
                      <li>✅ Feature 1</li>
                      <li>✅ Feature 2</li>
                      <li>✅ Feature 3</li>
                    </ul>
                  </div>
                ) : null // إخفاء المحتوى عند الضغط على "don't show data"
              )
            }
            className="cursor-pointer text-2xl font-semibold text-blue-400 my-4 hover:text-blue-600 transition"
          >
            {item}
          </h2>
        ))}
        {/* عرض المحتوى إذا كان موجودًا */}
        {test}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowComponent(!showComponent)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
        >
          {showComponent ? "إخفاء البيانات" : "إظهار البيانات"}
        </button>

        {showComponent && (
          <div className="animate-fade-in mt-6">
            <DataComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
