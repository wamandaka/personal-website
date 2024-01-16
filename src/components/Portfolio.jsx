import AssetPortfolio from "../assets/asset-portfolio.png";
const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="bg-[url('./assets/bg-portfolio.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-[1200px] mx-auto px-4 py-16   text-light flex flex-col items-center text-center md:px-12">
          <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            molestias!
          </p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-3">
            <div className="w-full bg-light/70 backdrop-blur bg-opacity-50 rounded-3xl px-3 text-start text-dark pt-4">
              <img src={AssetPortfolio} alt="" />
              <h1 className="font-semibold mt-5">Student App</h1>
              <div className="flex justify-between mb-9 mt-2 items-center md:mb-4">
                <p>MyTutor</p>
                <button className="btn bg-light py-2 px-4 font-semibold text-sm text-primary">
                  See Detail
                </button>
              </div>
            </div>
            <div className="w-full bg-light/70 backdrop-blur bg-opacity-50 rounded-3xl px-3 text-start text-dark pt-4">
              <img src={AssetPortfolio} alt="" />
              <h1 className="font-semibold mt-5">Student App</h1>
              <div className="flex justify-between mb-9 mt-2 items-center md:mb-4">
                <p>MyTutor</p>
                <button className="btn bg-light py-2 px-4 font-semibold text-sm text-primary">
                  See Detail
                </button>
              </div>
            </div>
            <div className="w-full bg-light/70 backdrop-blur bg-opacity-50 rounded-3xl px-3 text-start text-dark pt-4">
              <img src={AssetPortfolio} alt="" />
              <h1 className="font-semibold mt-5">Student App</h1>
              <div className="flex justify-between mb-9 mt-2 items-center md:mb-4">
                <p>MyTutor</p>
                <button className="btn bg-light py-2 px-4 font-semibold text-sm text-primary">
                  See Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
