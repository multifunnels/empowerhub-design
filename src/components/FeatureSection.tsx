
import { Users2, Calendar, Award, BookOpen, Clock, FileCheck } from "lucide-react";

const features = [
  {
    icon: <Users2 className="h-8 w-8" />,
    title: "מנחי סדנאות מומחים בתחומם",
    description: "למד ממקצוענים מוסמכים בעלי ניסיון עשיר בעולם האמיתי",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "לוח זמנים גמיש",
    description: "גש לתוכן בכל זמן ובכל מקום בקצב שלך – נוכל להתאים את התוכנית המתאימה והטובה ביותר בהתאם ללו\"ז ולצרכים שלך ושל הארגון. פרונטלי או אונליין לבחירתך.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "הכרה לגמו\"ש / הכרה להשתלמות מקצועית",
    description: "קורסי גמו\"ש, קורסים מקצועיים והעשרות מקצועיות - מגוון אפשרויות המותאמות לצרכים שלכם עם תעודות רשמיות.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "תוכן מותאם אישית",
    description: "סדנאות, קורסים, הרצאות, ימי עיון וכנסים המותאמים לצרכי הארגון שלך עם תהליך למידה ממוקד ואסטרטגיית הטמעה.",
  },
];

export const FeatureSection = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">למה לבחור בנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shrink-0 mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <div className="flex-1 text-center md:text-right">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
