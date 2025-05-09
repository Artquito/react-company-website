import heroImage from "../assets/heroImg.svg";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center max-sm: px-3">
      <img className="-z-1 opacity-95" src={heroImage} alt="hero image" />
      <h1 className="mt-8 mb-4 max-sm:text-2xl sm:text-4xl max-w-150 text-center font-bold">
        Streamline Your Business with <br />
        <span className="bg-gradient-to-b from-violet-800 to-violet-400 bg-clip-text text-transparent">
          Powerful ERP Solutions
        </span>
      </h1>
      <p className="max-w-180 max-sm:text-xs text-center">
        Simplify operations, boost productivity, and make smarter decisions —
        all from one centralized platform designed for growing businesses.
      </p>
      <div></div>
    </div>
  );
};

export default Hero;
