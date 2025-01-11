import { Users2, Calendar, Award, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Expert Instructors",
    description: "Learn from certified professionals with real-world experience",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Flexible Schedule",
    description: "Access content anytime, anywhere at your own pace",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Recognition",
    description: "Earn certificates valued by top organizations",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Tailored Content",
    description: "Courses customized to your industry needs",
  },
];

export const FeatureSection = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};