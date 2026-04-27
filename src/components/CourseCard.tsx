import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CourseCard = ({ title, description, icon }: CourseCardProps) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" className="group">
          {t("courses.learnMore")}{" "}
          <ArrowIcon
            className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4 transition-transform ${
              isRtl ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"
            }`}
          />
        </Button>
      </CardContent>
    </Card>
  );
};
