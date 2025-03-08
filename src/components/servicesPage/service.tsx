import {
  FaFeather,
  FaBinoculars,
  FaLeaf,
  FaDove,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";

const servicesData = [
  {
    id: 2,
    title: "Bird Conservation",
    description:
      "Join our efforts to protect endangered bird species and their habitats.",
    icon: <FaLeaf className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Bird Photography",
    description:
      "Capture stunning images with our professional bird photography workshops.",
    icon: <FaFeather className="text-5xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "Exotic Bird Adoption",
    description:
      "Adopt and care for exotic birds with our professional guidance.",
    icon: <FaDove className="text-5xl text-red-500" />,
  },
  {
    id: 1,
    title: "Bird Watching Tours",
    description:
      "Experience guided bird-watching tours in the most exotic locations.",
    icon: <FaBinoculars className="text-5xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Bird Conservation",
    description:
      "Join our efforts to protect endangered bird species and their habitats.",
    icon: <FaLeaf className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Bird Photography",
    description:
      "Capture stunning images with our professional bird photography workshops.",
    icon: <FaFeather className="text-5xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "Exotic Bird Adoption",
    description:
      "Adopt and care for exotic birds with our professional guidance.",
    icon: <FaDove className="text-5xl text-red-500" />,
  },
  {
    id: 1,
    title: "Bird Watching Tours",
    description:
      "Experience guided bird-watching tours in the most exotic locations.",
    icon: <FaBinoculars className="text-5xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Bird Conservation",
    description:
      "Join our efforts to protect endangered bird species and their habitats.",
    icon: <FaLeaf className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Bird Photography",
    description:
      "Capture stunning images with our professional bird photography workshops.",
    icon: <FaFeather className="text-5xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "Exotic Bird Adoption",
    description:
      "Adopt and care for exotic birds with our professional guidance.",
    icon: <FaDove className="text-5xl text-red-500" />,
  },
  {
    id: 5,
    title: "Educational Programs",
    description:
      "Learn about birds through our interactive workshops and seminars.",
    icon: <FaBookOpen className="text-5xl text-purple-500" />,
  },
  {
    id: 6,
    title: "Global Bird Research",
    description:
      "Participate in research projects to study and document bird species.",
    icon: <FaGlobe className="text-5xl text-orange-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* العنوان والوصف */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We offer a variety of services to support bird enthusiasts, researchers,
        and conservationists worldwide.
      </p>

      {/* شبكة الخدمات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
