import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../images/batman.jpg";
import img2 from "../images/matrix.png";
import img3 from "../images/mv1.jpg";
import img4 from "../images/mv2.jpg";
import img5 from "../images/mv3.jpg";
import img6 from "../images/mv4.jpg";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";

const dataFilm: { [key: string]: MyDataProps[] } = {
  data1: [
    {
      filmName: "Kayıp Çocuk",
      filmDesc:
        "Bir çocuğun kayboluşuyla başlayan bu kısa film, ailenin yaşadığı acıyı ve umutsuzluğu ele alırken, çocuğun bulunma sürecindeki duygusal yolculuğu da izleyiciye aktarıyor.",
      imgSrc: img1,
    },
    {
      filmName: "Geçmişin İzleri",
      filmDesc:
        "Bir ailenin eski bir evi temizlemesi sırasında keşfettikleri eski fotoğraflar, mektuplar ve eşyalar aracılığıyla geçmişlerini yeniden keşfetmelerini konu edinen bu kısa film, geçmişle bugün arasındaki bağı güçlü bir şekilde işliyor.",
      imgSrc: img2,
    },
    {
      filmName: "Kayıp Çocuk",
      filmDesc:
        "Bir çocuğun kayboluşuyla başlayan bu kısa film, ailenin yaşadığı acıyı ve umutsuzluğu ele alırken, çocuğun bulunma sürecindeki duygusal yolculuğu da izleyiciye aktarıyor.",
      imgSrc: img3,
    },
    {
      filmName: "Sessiz Anlaşma",
      filmDesc:
        "İki farklı kültürden gelen bir çiftin, iletişim kurmak için sözcükler yerine mimikler ve jestlerle anlaşmaya çalışmasını anlatan bu kısa film, sevginin sınırlarını ve evrensel iletişimin gücünü vurguluyor.",
      imgSrc: img4,
    },
    {
      filmName: "Gölgesiz Yol",
      filmDesc:
        "Bir adamın kendini kaybetmiş hissettiği bir dönemde, gizemli bir yolculuğa çıkarak kendi gölgesini aramasını konu alan bu kısa film, kişisel büyüme ve yeniden doğuş temasını işliyor.",
      imgSrc: img5,
    },
    {
      filmName: "Rüya Avcıları",
      filmDesc:
        "İnsanların rüyalarını avlayan ve onları ticari amaçlar için kullanan bir şirketin etrafında dönen bu kısa film, rüyaların değerini sorgularken etik ve insan doğası üzerine düşündürüyor.",
      imgSrc: img6,
    },
  ],

  data2: [
    {
      filmName: "Kayıp Çocuk",
      filmDesc:
        "Bir çocuğun kayboluşuyla başlayan bu kısa film, ailenin yaşadığı acıyı ve umutsuzluğu ele alırken, çocuğun bulunma sürecindeki duygusal yolculuğu da izleyiciye aktarıyor.",
      imgSrc: img1,
    },
    {
      filmName: "Geçmişin İzleri",
      filmDesc:
        "Bir ailenin eski bir evi temizlemesi sırasında keşfettikleri eski fotoğraflar, mektuplar ve eşyalar aracılığıyla geçmişlerini yeniden keşfetmelerini konu edinen bu kısa film, geçmişle bugün arasındaki bağı güçlü bir şekilde işliyor.",
      imgSrc: img2,
    },
    {
      filmName: "Kayıp Çocuk",
      filmDesc:
        "Bir çocuğun kayboluşuyla başlayan bu kısa film, ailenin yaşadığı acıyı ve umutsuzluğu ele alırken, çocuğun bulunma sürecindeki duygusal yolculuğu da izleyiciye aktarıyor.",
      imgSrc: img3,
    },
    {
      filmName: "Sessiz Anlaşma",
      filmDesc:
        "İki farklı kültürden gelen bir çiftin, iletişim kurmak için sözcükler yerine mimikler ve jestlerle anlaşmaya çalışmasını anlatan bu kısa film, sevginin sınırlarını ve evrensel iletişimin gücünü vurguluyor.",
      imgSrc: img4,
    },
  ],
};

interface MyDataProps {
  filmName: string;
  filmDesc: string;
  imgSrc: string;
}
const Movies = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8  lg:space-y-0">
        {/* left content */}
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x divide-red-500 divide-opacity-50 mb-8 pl-10 lg:pl-0">
            <h2 className="text-gray-700 pl-2 hover:text-white duration-700 ">
              <button>Latest</button>
            </h2>
            <h2 className="text-gray-700  pl-2 hover:text-white duration-700 ">
              <button>Best</button>
            </h2>
            <h2 className="text-gray-700 pl-2 hover:text-white duration-700 ">
              <button>Popular</button>
            </h2>
          </div>
          {/* images container */}
          <div className="flex flex-wrap ">
            {dataFilm.data1.map((movies, index) => (
              <div
                key={index}
                className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3"
              >
                <img
                  src={movies.imgSrc}
                  className="group-hover:scale-110 opacity-50 duration-500"
                />
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gray-700 group-hover:text-yellow-400 group-hover:mb-2 duration-500">
                    {movies.filmName}
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gray-700">
                    {movies.filmDesc}
                  </p>
                  <div className="absolute flex space-x-7 text-white opacity-0 -bottom-2  group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <button className="hover:text-red-500 duration-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <button className="hover:text-red-500 duration-500">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right content */}
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="text-gray-700 mb-8">Hot News</h2>
          <div className="flex flex-row lg:flex-col lg:pb-16 lg:h-full justify-start lg:justify-between  space-y-4 flex-wrap lg:flex-nowrap ">
            {dataFilm.data2.map((movies, index) => (
              <div
                key={index}
                className="flex items-center group basis-3/4 md:basis-1/2"
              >
                <div className="basis-1/3 h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={movies.imgSrc}
                    alt=""
                  />
                </div>
                {/* imgdetail */}
                <div className="pl-6 basis-2/3 text-gray-800 group-hover:text-yellow-400 group-hover:cursor-pointer duration-500">
                  <p className="text-sm">{movies.filmDesc}</p>
                  <p className="text-xs tracking-tighter mt-2 font-bold ">
                    ON NOW 03 2024
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
