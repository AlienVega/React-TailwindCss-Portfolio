const Footer = () => {
  return (
    <section className="bg-black text-gray-600">
      <div className="container flex flex-col md:flex-row justify-center align-middle px-10 lg:px-0 pb-8">
        {/* left */}
        <div className="basis-1/3">
          <span className=" text-2xl lg:text-3xl text-transparent font-bold bg-gradient-to-r bg-clip-text from-red-500 to-gray-400 ">
            Vega
          </span>
          <p className="text-sm mt-2">2024 AlienVega</p>
        </div>
        {/* middle */}
        <div className="basis-1/3">
          <h2 className="mb-2 text-red-700">LINKS</h2>
          <div className="grid grid-cols-5 gap-2">
            <button className="col-span-2 hover:text-yellow-300 duration-500">
              Blog
            </button>
            <button className="col-span-2 hover:text-yellow-300 duration-500">
              News
            </button>
            <button className="col-span-2 hover:text-yellow-300 duration-500">
              About
            </button>
            <button className="col-span-2 hover:text-yellow-300 duration-500">
              About Us
            </button>
          </div>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-red-700">LINKS</h2>
          <form className="flex ">
            <input
              className="py-1 px-2 bg-transparent placeholder:text-xs border border-red-600"
              type="text"
              placeholder="Type Your Email"
            />
            <button className=" py-1 border px-2 uppercase border-red-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
