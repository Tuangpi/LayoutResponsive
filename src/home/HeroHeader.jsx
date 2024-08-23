import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroHeader = () => {
  return (
    <header className="flex flex-col lg:flex-row lg:justify-between items-center gap-x-4">
      <div className="w-full lg:w-[65%]">
        <div className="relative w-full">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/042/485/small_2x/mountain-sunrise-with-pine-forest-vector.jpg"
            className="w-full"
          />
          <div className="absolute inset-0 text-white bg-black bg-opacity-50">
            <div className="w-11/12 md:w-2/3 m-auto mt-3 sm:mt-20 md:mt-28 lg:mt-32">
              <div className="text-2xl font-extrabold uppercase">
                World News
              </div>
              <div className="h-0.5 w-full bg-white my-2 md:my-4 lg:my-8"></div>
              <div className="text-xl font-bold">
                Amazing places in America to visit
              </div>
              <p className="mb-6 text-slate-200">
                For some reason - this country, this city, this neighborhood,
                this particular street is the place you are living a majority of
                your life in.
              </p>
              <button className="uppercase bg-red-500 px-6 py-2.5 text-xs font-bold rounded-md">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[70%] lg:w-[30%] m-auto pr-6 mt-6 lg:mt-0">
        <div className="flex justify-between items-center">
          <div className="uppercase font-medium text-xl">More News</div>
          <div className="flex items-center gap-x-8 text-sm">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-slate-400 cursor-default"
            />
            <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-200 my-8"></div>
        <div>
          <h2 className="text-orange-500 uppercase font-semibold">Travel</h2>
          <h4 className="mt-2 font-medium text-sm">Article title</h4>
          <p className="mt-1 leading-6 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam voluptate voluptatum...
          </p>
          <div className="flex items-center gap-x-3 text-xs text-slate-500 mt-2">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="italic">2 mins ago</div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-orange-500 uppercase font-semibold">
            Technology
          </h2>
          <h4 className="mt-2 font-medium text-sm">Article title</h4>
          <p className="mt-1 leading-6 text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veniam voluptate voluptatum...
          </p>
          <div className="flex items-center gap-x-3 text-xs text-slate-500 mt-2">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="italic">2 mins ago</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeroHeader;
