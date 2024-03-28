import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../images/mv3.jpg";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
const PostSection = () => {
  return (
    <section className="py-24 bg-black text-gray-500">
      <div className="container px-10 lg:px-0">
        {/* title */}
        <h2 className="text-red-400">
          <button>Populer Posts</button>
        </h2>
        {/* grid */}
        <div className="grid grid-cols-6 gap-10">
          {/* item1 */}
          <div className="col-span-6 md:col-span-3 border border-red-500">
            {/* item1 header */}
            <div className="border-b border-red-400 py-1 flex items-center justify-around ">
              <h3>Lorem ipsum dolor sit amet..</h3>
              <img
                src={img1}
                alt="img"
                className="w-10  object-contain rounded-full"
              />
            </div>
            {/* item1 paragraph */}
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem
              nemo cum necessitatibus praesentium obcaecati nam aliquam impedit
              pariatur enim?
            </p>
            {/* footer */}
            <div className="p-4 flex items-center justify-end space-x-4 font-bold text-xs">
              <p>19.03.2023</p>
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faComment} />
                <p>12</p>
                <FontAwesomeIcon icon={faHeart} />
                <p>09</p>
              </div>
            </div>
          </div>
          {/* item2 */}
          <div className="col-span-6 md:col-span-3 border border-red-500">
            {/* item1 header */}
            <div className="border-b border-red-400 py-1 flex items-center justify-around ">
              <h3>Lorem ipsum dolor sit amet..</h3>
              <img
                src={img1}
                alt="img"
                className="w-10  object-contain rounded-full"
              />
            </div>
            {/* item1 paragraph */}
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem
              nemo cum necessitatibus praesentium obcaecati nam aliquam impedit
              pariatur enim?
            </p>
            {/* footer */}
            <div className="p-4 flex items-center justify-end space-x-4 font-bold text-xs">
              <p>19.03.2023</p>
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faComment} />
                <p>12</p>
                <FontAwesomeIcon icon={faHeart} />
                <p>09</p>
              </div>
            </div>
          </div>
          {/* item3 */}
          <div className="col-span-3 lg:col-span-2 border border-yellow-300">
            {/* item1 header */}
            <div className="border-b border-red-400 py-1 flex items-center justify-around ">
              <h3>Lorem ipsum dolor sit amet..</h3>
              <img
                src={img1}
                alt="img"
                className="w-10  object-contain rounded-full"
              />
            </div>
            {/* item1 paragraph */}
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem
              nemo cum necessitatibus praesentium obcaecati nam aliquam impedit
              pariatur enim?
            </p>
            {/* footer */}
            <div className="p-4 flex items-center justify-end space-x-4 font-bold text-xs">
              <p>19.03.2023</p>
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faComment} />
                <p>12</p>
                <FontAwesomeIcon icon={faHeart} />
                <p>09</p>
              </div>
            </div>
          </div>
          {/* item4 */}
          <div className="col-span-3 lg:col-span-2 border border-yellow-300">
            {/* item1 header */}
            <div className="border-b border-red-400 py-1 flex items-center justify-around ">
              <h3>Lorem ipsum dolor sit amet..</h3>
              <img
                src={img1}
                alt="img"
                className="w-10  object-contain rounded-full"
              />
            </div>
            {/* item1 paragraph */}
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem
              nemo cum necessitatibus praesentium obcaecati nam aliquam impedit
              pariatur enim?
            </p>
            {/* footer */}
            <div className="p-4 flex items-center justify-end space-x-4 font-bold text-xs">
              <p>19.03.2023</p>
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faComment} />
                <p>12</p>
                <FontAwesomeIcon icon={faHeart} />
                <p>09</p>
              </div>
            </div>
          </div>
          {/* item5 */}
          <div className="col-span-3 lg:col-span-2 border border-yellow-300">
            {/* item1 header */}
            <div className="border-b border-red-400 py-1 flex items-center justify-around ">
              <h3>Lorem ipsum dolor sit amet..</h3>
              <img
                src={img1}
                alt="img"
                className="w-10  object-contain rounded-full"
              />
            </div>
            {/* item1 paragraph */}
            <p className="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rem
              nemo cum necessitatibus praesentium obcaecati nam aliquam impedit
              pariatur enim?
            </p>
            {/* footer */}
            <div className="p-4 flex items-center justify-end space-x-4 font-bold text-xs">
              <p>19.03.2023</p>
              <div className="flex items-center justify-center space-x-1">
                <FontAwesomeIcon icon={faComment} />
                <p>12</p>
                <FontAwesomeIcon icon={faHeart} />
                <p>09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
