import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrendingCard = ({ imgUrl, title, body, postedTime }) => {
  return (
    <div className="rounded-md bg-white">
      <img
        src={imgUrl}
        alt="trending_card_img"
        className="rounded-t-md w-full"
      />
      <div className="p-8">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-slate-500 mt-2 leading-6">{body}</p>
        <div className="flex items-center gap-x-3 text-sm text-slate-500 mt-5">
          <div>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="italic">{postedTime}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
