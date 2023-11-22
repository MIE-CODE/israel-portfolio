import Socials from "./Socials";
import Stack from "./Stack";

const Intro = () => {
  return (
    <section className="sections xl:pl-5 mb-44">
      <div data-aos="fade-right" className={`ease-in duration-500 `}>
        <p className="text">Hello, I'm Victor</p>
        <h1 className="font-bold text-3xl md:text-6xl uppercase mx-0 mt-3.5 mb-10">
          A front-end <br /> Engineer.
        </h1>
        <p className="text text-secondary-100">
          I enjoy making interactive and animated web pages
          <br /> to ease user experience
          <br />
        </p>
      </div>
      <Socials display={"flex"} />
      <Stack />
    </section>
  );
};

export default Intro;
