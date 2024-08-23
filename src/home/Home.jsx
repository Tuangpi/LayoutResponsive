import { Link } from "react-router-dom";
import HappeningsNow from "./HappeningsNow";
import HeroHeader from "./HeroHeader";
import Trending from "./Trending";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";

const Home = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-3 bg-slate-50 h-12">
        <Link to="/#" className="uppercase text-orange-600 text-sm font-bold">
          Logo
        </Link>
        <div className="flex">
          <div className="flex items-center gap-x-1.5 md:gap-x-3 uppercase text-slate-400 text-xs md:text-sm font-normal md:font-semibold">
            <Link to="/#" className="text-slate-600">
              Home
            </Link>
            <Link to="/#">Discovery</Link>
            <Link to="/#">Photos</Link>
            <Link to="/#">Contact</Link>
          </div>
          <div className="ml-3 md:ml-6">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
              className="rounded-full w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <HeroHeader />
      <main className="bg-slate-50 pb-12">
        <div className="w-[90%] md:w-[70%] m-auto mt-4">
          <Trending />
          <HappeningsNow />
        </div>
      </main>
      <footer className="bg-zinc-400 py-12">
        <div className="w-[90%] md:w-[70%] m-auto flex flex-col lg:flex-row justify-between gap-x-12">
          <div className="flex flex-col lg:flex-row text-center lg:text-left gap-x-6 lg:gap-x-12 m-auto">
            <div className="font-bold text-white text-sm mb-8 lg:mb-0">
              LOGO
            </div>
            <div className="flex gap-x-10 text-xs font-medium text-zinc-200">
              <div className="flex flex-col gap-y-2.5">
                <Link className="block" to="/#">
                  Home
                </Link>
                <Link className="block" to="/#">
                  Discovery
                </Link>
                <Link className="block" to="/#">
                  Photos
                </Link>
                <Link className="block" to="/#">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-y-2.5">
                <Link className="block" to="/#">
                  About
                </Link>
                <Link className="block" to="/#">
                  Help
                </Link>
                <Link className="block" to="/#">
                  Terms
                </Link>
                <Link className="block" to="/#">
                  Guidlines
                </Link>
              </div>
              <div className="flex flex-col gap-y-2.5">
                <Link className="block" to="/#">
                  Testimorial
                </Link>
                <Link className="block" to="/#">
                  Advertise
                </Link>
                <Link className="block" to="/#">
                  Integrations
                </Link>
                <Link className="block" to="/#">
                  Careers
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-8 lg:mt-0 gap-x-16">
            <div className="w-1/2 m-auto lg:m-0 lg:w-full">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="focus:outline-none focus:border-zinc-300 bg-transparent border border-zinc-300 rounded-md py-1.5 placeholder:text-zinc-300 px-2 w-full"
                />
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="absolute top-2.5 text-sm right-3 text-zinc-100"
                />
              </div>
              <p className="text-slate-300 text-xs mt-2.5">
                Stay in touch with us for the freshest products!
              </p>
            </div>
            <div className="text-zinc-100 flex m-auto mt-8 lg:m-0 lg:justify-between items-start gap-x-4 lg:gap-x-6">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faGlobe} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
