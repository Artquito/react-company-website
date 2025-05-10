const headingTItle = ({ title, desc, imgSrc }) => {
  return (
    <div>
      <div className="mb-40 flex max-lg:flex-wrap gap-16 justify-between items-center">
        <img className="lg:w-1/2" src={imgSrc} alt="" />
        <div className="grow">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default headingTItle;
