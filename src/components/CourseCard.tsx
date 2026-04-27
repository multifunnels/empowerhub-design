import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  to?: string;
}

export const CourseCard = ({ title, description, icon, index = 0, to = "/courses" }: CourseCardProps) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={to}
      className="group tile p-8 lg:p-10 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex items-start justify-between mb-10">
        <span className="idx text-3xl">{num}</span>
        <div className="text-foreground/60 group-hover:text-primary transition-colors duration-500">
          {icon}
        </div>
      </div>

      <h3 className="display-jp text-xl md:text-2xl mb-5 leading-snug">
        {title}
      </h3>
      <p className="text-sm leading-[1.9] text-muted-foreground flex-1">
        {description}
      </p>

      {/* hairline grows on hover */}
      <div className="mt-10 relative h-px bg-border overflow-hidden">
        <span className="absolute inset-y-0 left-0 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
      </div>

      <span
        className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground/85 group-hover:text-primary transition-colors duration-500 self-start"
      >
        {t("courses.learnMore")}
        <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
      </span>
    </Link>
  );
};
