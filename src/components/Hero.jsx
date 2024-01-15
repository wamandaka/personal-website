import ayaka from "../assets/ayaka-profile.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-primary">
        <div className="max-w-[1200px] mx-auto px-4 h-screen flex items-center md:h-full md:px-12 md:py-20">
          <div className="flex flex-col items-center text-center md:flex-row-reverse md:text-start">
            <div className="md:w-1/2 justify-center flex ">
              <div className="w-48 h-48 rounded-full overflow-hidden md:w-full md:h-full  ">
                <img src={ayaka} alt="" className="" loading="lazy" />
              </div>
            </div>
            <div className="md:w-1/2 pt-10">
              <h1 className="text-2xl font-bold text-light">
                Hello, I&apos;m Kamisato Ayaka
              </h1>
              <h1 className="text-2xl font-bold text-light">
                Software Engineer
              </h1>
              <p className="text-light pt-4 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                ut odit, necessitatibus tenetur nemo qui?
              </p>
              <a
                href="#about"
                className="btn text-light mt-10 text-lg font-bold hidden md:inline-block text-center py-3 px-8"
              >
                About me
              </a>
            </div>
            <a
              href="#about"
              className="btn text-light mt-10 w-full text-lg font-bold md:hidden"
            >
              About me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
