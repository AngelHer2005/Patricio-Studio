interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-indigo-500 mt-4 ${centered ? 'mx-auto' : ''} rounded-full`} />
    </div>
  );
};