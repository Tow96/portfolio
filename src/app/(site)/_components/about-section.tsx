export const AboutSection = () => (
  <section id="home" className="section-min-height flex flex-col items-center justify-center">
    <div className="relative max-w-xl before:absolute before:-left-10 before:-top-10 before:h-12 before:w-16 before:border-l-8 before:border-t-8 before:border-spaceCadet before:content-[''] after:absolute after:-bottom-10 after:-right-10 after:h-12 after:w-16 after:border-b-8 after:border-r-8 after:border-spaceCadet after:content-[''] lg:max-w-3xl tallscreen:w-2/3">
      <h1 className="pb-4 text-center text-9xl font-bold text-persianOrange tallscreen:text-6xl">
        Hi. I'm <br />
        Jose Tow
      </h1>
      <p className="tallscreen:xl text-center text-2xl font-bold">
        Full Stack developer, DevOps Engineer and Mechatronics Engineer
      </p>
      <p className="tallscreen:lg text-center text-xl">
        From hardware to cloud. I&apos;m very interested in creating solutions for any kind of need.
      </p>
    </div>
  </section>
);
