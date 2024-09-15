import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Logo from "../Assests/logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
type UpperNavProps = {
  isOpen?: boolean;
  toggleMenu?: () => void;
};
const UpperNav = ({ isOpen, toggleMenu }: UpperNavProps) => {
  const counter = useSelector((state: RootState) => state.counter.count);
  const {productid} = useParams()

  return (
    <>
      <div className="navbar-container">
        <div className="NavHeader">
          <div className="NavLogo">
            <img className="h-[5rem]" src={Logo} alt="Logo" />
          </div>
          <div className="NavLoader">
            <p className="text-bg ">Happy Restaurant</p>
            <p className="text-Res  ">Happy Restaurant</p>
            <p className="text-ResMil  ">Happy Restaurant</p>
          </div>

          <div className="Nav">
            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
            </ul>
          </div>

          <div className="Icons">
            <CiSearch />
            {
              productid ? 
            <Link to={`/card/${productid}`}>
              <div className="flex flex-col items-center relative">
                {counter > 0 && (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 rounded-full bg-red-600 text-white text-xs font-bold">
                    {counter}
                  </span>
                )}
                <FaOpencart className="text-2xl" />
              </div>
            </Link> :
            <Link to={`/card`}>
            <div className="flex flex-col items-center relative">
              {counter > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-4 w-4 rounded-full bg-red-600 text-white text-xs font-bold">
                  {counter}
                </span>
              )}
              <FaOpencart className="text-2xl" />
            </div>
          </Link>

            }
          </div>

          <div
            className={`hamburger ${isOpen ? "open" : ""} `}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`nav-menu ${isOpen ? "open" : ""}`}>
            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
            </ul>
            <div className="nav-menu-icons">
              <CiSearch />
              <FaOpencart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperNav;
