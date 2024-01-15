import { FaCode } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <section
        id="services"
        className="max-w-[1200px] mx-auto px-4 flex items-center my-28 md:my-20 md:mx-12"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-dark md:text-3xl">
            Expertise Service, Let’s check it out
          </h1>
          <p className="text-dark pt-4 text-lg md:w-[75%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ut
            odit, necessitatibus tenetur nemo qui?
          </p>
          <div className="grid md:grid-cols-2 gap-8 w-full mt-16 ">
            <div className="p-8 bg-foreground rounded-xl shadow-2xl flex flex-col items-center justify-center group hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out md:p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-foreground rounded-xl">
                <FaCode
                  size={32}
                  className="bg-accent text-light p-1 rounded-sm"
                />
              </div>
              <h1 className="text-lg font-bold text-dark mt-6 group-hover:text-light">
                Software Engineer
              </h1>
              <p className="text-base font-normal text-dark text-opacity-70 mt-2 group-hover:text-light">
                Finding a loyalty and rewards platform that effectively retains
                the company’s channel partner, auto
              </p>
            </div>
            <div className="p-8 bg-foreground rounded-xl shadow-2xl flex flex-col items-center justify-center group hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out md:p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-foreground rounded-xl">
                <FaCode
                  size={32}
                  className="bg-accent text-light p-1 rounded-sm"
                />
              </div>
              <h1 className="text-lg font-bold text-dark mt-6 group-hover:text-light">
                Software Engineer
              </h1>
              <p className="text-base font-normal text-dark text-opacity-70 mt-2 group-hover:text-light">
                Finding a loyalty and rewards platform that effectively retains
                the company’s channel partner, auto
              </p>
            </div>
            <div className="p-8 bg-foreground rounded-xl shadow-2xl flex flex-col items-center justify-center group hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out md:p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-foreground rounded-xl">
                <FaCode
                  size={32}
                  className="bg-accent text-light p-1 rounded-sm"
                />
              </div>
              <h1 className="text-lg font-bold text-dark mt-6 group-hover:text-light">
                Software Engineer
              </h1>
              <p className="text-base font-normal text-dark text-opacity-70 mt-2 group-hover:text-light">
                Finding a loyalty and rewards platform that effectively retains
                the company’s channel partner, auto
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
