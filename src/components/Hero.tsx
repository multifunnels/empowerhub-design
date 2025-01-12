import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-l from-[rgba(223,234,247,1)] to-[rgba(244,248,252,1)]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10" />
      <div className="container relative z-10 px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          העצם את הצוות שלך, שנה את הארגון
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up">
          גלה קורסים מותאמים אישית המיועדים לשפר מנהיגות, תקשורת ופרודוקטיביות
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = 'https://academy.tsionline.org/courses'}
          >
            עיין בקורסים <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            בקש ייעוץ
          </Button>
        </div>
      </div>
    </div>
  );
};