import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

export const CourseCard = ({ title, description, icon, index = 0 }: CourseCardProps) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group tile p-8 lg:p-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-10">
        <span className="idx text-3xl">{num}</span>
        <div className="text-foreground/50 group-hover:text-primary transition-colors duration-500">
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

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-foreground/80 group-hover:text-primary transition-colors duration-500 self-start"
      >
        {t("courses.learnMore")}
        <ArrowIcon className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
      </button>
    </article>
  );
};
