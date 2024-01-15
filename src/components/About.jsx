import { FaCode } from "react-icons/fa";
import AyakaAbout from "../assets/ayaka.png";
import Titik2 from "../assets/Titik-titik.svg";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="max-w-[1200px] mx-auto px-4 bg-foreground py-20 md:flex items-center md:gap-10 md:px-12"
      >
        <div className="md:w-[40%] hidden md:inline-block relative">
          <img src={AyakaAbout} alt="" />
          <img src={Titik2} alt="" className="absolute top-10 right-0" />
          <img src={Titik2} alt="" className="absolute bottom-10 left-0" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-dark">About me</h1>
          <p className="text-dark pt-4 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            maiores quod dolores fuga suscipit. Quisquam.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="w-full p-8 bg-light rounded-xl shadow-2xl">
              <div className="flex gap-6">
                <div className="">
                  <FaCode
                    size={32}
                    className="bg-primary text-light p-1 rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-dark">
                    Software Engineer at Tech Company
                  </h1>
                  <p className="text-opacity-70 text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-8 bg-light rounded-xl shadow-2xl">
              <div className="flex gap-6">
                <div className="">
                  <FaCode
                    size={32}
                    className="bg-primary text-light p-1 rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-dark">
                    Software Engineer at Tech Company
                  </h1>
                  <p className="text-opacity-70 text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, veritatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
