interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <figure className="tile p-10 flex flex-col h-full">
      <span
        aria-hidden="true"
        className="text-primary text-6xl leading-none font-serif font-light mb-6 select-none"
        style={{ fontFamily: '"Noto Serif JP", serif' }}
      >
        “
      </span>
      <blockquote className="text-[15px] leading-[1.9] italic text-foreground/85 flex-1">
        {quote}
      </blockquote>
      <div className="mt-8 pt-6 border-t border-border">
        <figcaption>
          <p className="text-sm tracking-wide text-foreground">{author}</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-1">
            {role}
          </p>
        </figcaption>
      </div>
    </figure>
  );
};
