import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TRENDING_DATA from "../assets/TRENDING_DATA";
import TrendingCard from "./component/TrendingCard";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Trending = () => {
  return (
    <section>
      <div className="flex justify-between items-center pb-8 pt-6">
        <h2 className="uppercase font-medium text-2xl">Trending</h2>
        <div className="flex items-center gap-x-8">
          <FontAwesomeIcon icon={faAngleLeft} className="text-slate-400" />
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRENDING_DATA.map((data) => (
          <TrendingCard
            key={data.id}
            title={data.title}
            body={data.body}
            imgUrl={data.imgUrl}
            postedTime={data.postedTime}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
