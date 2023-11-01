export const HeroSection = () => (
  <section
    id="home"
    className="section-min-height bg-mandarine-50 flex flex-col items-center justify-center">
    <div className="relative z-10 max-w-xl before:absolute before:-left-10 before:-top-10 before:h-12 before:w-16 before:border-l-8 before:border-t-8 before:border-orange-400 before:content-[''] after:absolute after:-bottom-10 after:-right-10 after:h-12 after:w-16 after:border-b-8 after:border-r-8 after:border-orange-400 after:content-[''] lg:max-w-3xl tallscreen:w-2/3">
      <h2 className="pb-4 text-center text-9xl font-bold tallscreen:text-6xl">
        Hi. I&apos;m <br />
        Jose Tow
      </h2>
      <p className="tallscreen:xl text-center text-2xl font-bold">
        Full Stack developer, DevOps Engineer and Mechatronics Engineer
      </p>
      <p className="tallscreen:lg text-center text-xl text-bianca-800">
        From hardware to cloud. I&apos;m very interested in creating solutions for any kind of need.
      </p>
    </div>
    <div className="lines-in-motion absolute right-9 top-32 z-0 h-72 w-52 md:left-2/3 md:top-1/4 md:h-96 md:w-72"></div>
  </section>
);
