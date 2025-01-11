import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <Card className="bg-accent">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <p className="text-lg mb-4">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};