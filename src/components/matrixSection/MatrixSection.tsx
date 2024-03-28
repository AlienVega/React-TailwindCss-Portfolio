import img1 from "../images/mv2.jpg";
const MatrixSection = () => {
  return (
    <section className="bg-white mb-12">
      <div className=" container flex  items-center justify-center relative">
        {/* left content */}
        <div className="md:basis-1/3 lg:basis-1/2   mt-14 basis-1/2 w-72 h-72 ">
          <img src={img1} alt="img" className="h-full w-full object-contain" />
        </div>

        {/* right content */}
        <div className="md:basis-2/3 lg:basis-1/2">
          {/* right content container */}
          <div className="flex flex-col justify-center py-10">
            <h3 className="tracking-wider text-red-600 ">
              Action ,Drama ,Thriller
            </h3>
            <h2 className="mb-2">Matrix Reloded</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              temporibus nisi quis pariatur alias sed nobis consequuntur aperiam
              consequatur repudiandae?
            </p>
            <h3 className="tracking-wider text-yellow-400 ">
              8 wins 24 mominations
            </h3>
          </div>
        </div>
        <div className="left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-yellow-300 rounded-full text-center flex items-center">
          <p className="uppercase font-bold text-xl text-red-400 -rotate-45">
            Oldie & Goldie
          </p>
        </div>
      </div>
    </section>
  );
};

export default MatrixSection;
