export const HeroSection = () => (
  <section
    id="home"
    className="section-min-height flex flex-col items-center justify-center bg-zinc-100">
    <div className="relative z-10 max-w-xl before:absolute before:-left-10 before:-top-10 before:h-12 before:w-16 before:border-l-8 before:border-t-8 before:border-zinc-300 before:content-[''] after:absolute after:-bottom-10 after:-right-10 after:h-12 after:w-16 after:border-b-8 after:border-r-8 after:border-zinc-300 after:content-[''] lg:max-w-3xl tallscreen:w-2/3">
      <h2 className="pb-4 text-center text-9xl font-bold text-zinc-900 tallscreen:text-6xl">
        Hi. I&apos;m <br />
        Jose Tow
      </h2>
      <p className="tallscreen:xl text-center text-2xl font-bold text-zinc-900">
        Full Stack developer, DevOps Engineer and Mechatronics Engineer
      </p>
      <p className="tallscreen:lg text-center text-xl text-zinc-800">
        From hardware to cloud. I&apos;m very interested in creating solutions for any kind of need.
      </p>
    </div>
    <div className="lines-in-motion absolute right-9 top-28 z-0 h-72 w-52"></div>
  </section>
);
