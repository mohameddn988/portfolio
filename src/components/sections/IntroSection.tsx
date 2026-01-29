const IntroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center px-16 md:px-24 lg:px-32 bg-(--bg-primary) text-(--color-text-primary)">
      <div className="w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl tracking-[0.2em] text-[#71717a] font-medium uppercase">
            Hello stranger! 
          </span>
          <span className="text-4xl animate-wave origin-bottom-right inline-block">
            👋
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white block w-full">
          I'm passionate about designing and building scalable web and mobile
          products, combining solid engineering with a modern, user-focused
          design approach
        </h1>
      </div>
    </section>
  );
};

export default IntroSection;
