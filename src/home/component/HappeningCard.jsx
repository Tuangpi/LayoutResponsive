import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HappeningCard = ({ imgUrl, title, postedTime, postedBy }) => {
  return (
    <div className="rounded-md mb-6">
      <img src={imgUrl} className="rounded-md" />
      <h4 className="font-medium text-sm mt-2.5">{title}</h4>
      <div className="flex items-center gap-x-2 text-slate-500 text-xs font-medium mt-1.5">
        <div>
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div>
          {postedBy} by{" "}
          <span className="underline cursor-pointer">{postedBy}</span>
        </div>
      </div>
    </div>
  );
};

export default HappeningCard;
