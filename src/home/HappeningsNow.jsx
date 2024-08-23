import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HAPPENING_DATA from "../assets/HAPPENING_DATA";
import HappeningCard from "./component/HappeningCard";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const HappeningsNow = () => {
  return (
    <section>
      <div className="flex justify-between pb-8 pt-6 mt-5">
        <h2 className="uppercase font-medium text-2xl">Happening Now</h2>
        <div className="flex items-center gap-x-8">
          <FontAwesomeIcon icon={faAngleLeft} className="text-slate-400" />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-x-6">
        <div className="w-full lg:w-3/4">
          <div className="mb-6 relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0hSlHZJUp5mBfqHey1O09t-FWuVuVwWAdw&s"
              className="w-full rounded-md"
            />
            <div className="absolute top-6 left-6">
              <div className="uppercase text-white font-bold">City</div>
              <div className="mt-4 sm:mt-28">
                <h2 className="font-medium text-xl text-slate-100">
                  Large article title
                </h2>
                <p className="text-slate-300 text-xs font-medium mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas culpa iusto fugiat natus nulla eius ducimus illum,
                  pariatur temporibus enim facere eaque quia, dignissimos
                  obcaecati. Eveniet blanditiis temporibus nam aut.
                </p>
                <div className="flex items-center gap-x-3 text-xs text-slate-400 mt-3">
                  <FontAwesomeIcon icon={faClock} />
                  <div>2m ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCtKKoBBDx5XdSEiIDlhFJCFcEDbBHfsOQg&s"
              className="w-full rounded-md"
            />
            <div className="absolute top-6 left-6">
              <div className="uppercase text-white font-bold">Travel</div>
              <div className="mt-4 sm:mt-32">
                <h2 className="font-medium text-xl text-slate-100">
                  Large article title
                </h2>
                <p className="text-slate-300 text-xs font-medium mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  dolore vel asperiores ullam dolorem qui. Aliquam quae beatae
                  assumenda, ad ipsum consequatur amet. Distinctio quos dicta at
                  nesciunt, cupiditate autem?
                </p>
                <div className="flex items-center gap-x-3 text-xs text-slate-400 mt-3">
                  <FontAwesomeIcon icon={faClock} />
                  <div>2m ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-x-3 mt-5 lg:block lg:w-1/4">
          {HAPPENING_DATA.map((data) => (
            <HappeningCard
              key={data.id}
              imgUrl={data.imgUrl}
              postedBy={data.postedBy}
              title={data.title}
              postedTime={data.postedTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappeningsNow;
