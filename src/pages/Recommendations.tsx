
import { Star, Award, Quote } from "lucide-react";
import { Testimonial } from "@/components/Testimonial";

const Recommendations = () => {
  const testimonials = [
    {
      quote: "קורס המנהיגות שינה את האופן בו אני מנהל את הצוות שלי. מומלץ מאוד!",
      author: "שרה כהן",
      role: "מנהלת משאבי אנוש"
    },
    {
      quote: "מעשי, מעניין וניתן ליישום מיידי בארגון שלנו.",
      author: "מיכאל לוי",
      role: "ראש צוות"
    },
    {
      quote: "ההשקעה הטובה ביותר שעשינו בפיתוח הצוות שלנו.",
      author: "אמה רודריגז",
      role: "מנהלת תפעול"
    },
    {
      quote: "התכנים שלמדנו בקורס יוצרים תוצאות היו מדהימים ושימושיים.",
      author: "דוד ישראלי",
      role: "סמנכ\"ל טכנולוגיות"
    },
    {
      quote: "הקורס בחשיבה תוצאתית שינה את הדרך בה כל הצוות שלי חושב על בעיות ופתרונות.",
      author: "רחל גולדמן",
      role: "מנהלת פיתוח עסקי"
    },
    {
      quote: "המרצה היה מקצועי, מרתק והעביר את החומר בצורה נהדרת ומעשית.",
      author: "יוסי אברהם",
      role: "מנהל פרויקטים"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Star className="h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">המלצות</h1>
            <p className="max-w-2xl text-lg mb-8">
              אלה מקצת מהמשובים שאנו מקבלים מלקוחותינו הרבים. 
              אנו גאים לעבוד עם חברות וארגונים מובילים שנהנים מהתכנים המקצועיים שלנו.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              role={testimonial.role} 
            />
          ))}
        </div>
      </div>

      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold mb-4">הארגונים שסומכים עלינו</h2>
            <p className="max-w-2xl text-lg mb-12">
              אנו עובדים עם מגוון רחב של ארגונים, חברות וגופים ממשלתיים להעצמת המנהלים והעובדים שלהם
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
                  <div className="text-gray-400 text-sm">לוגו חברה {num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
