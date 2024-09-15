import { useEffect } from "react";
import Logo from "../Assests/happy_british_awards_blue.png";
type HeaderProps = {
  isLoaded: boolean;
  setisLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};
const LowerNav = ({ isLoaded, setisLoaded }: HeaderProps) => {
  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 400);
  }, []);
  return (
    <>
      <div className={`Header ${isLoaded ? "slide-in" : ""}`}>
        <div className="Wraper flex items-center justify-between lg:justify-center">
          <div className="Heading">
            <p className="text-lg">RESTAURANT OF THE YEAR IN PAKISTAN 2024</p>
          </div>

          <div className="logo">
            <img
              src={Logo}
              alt="Restaurant Logo"
              className=" lg:w-32 lg:h-32"
            />
          </div>

          <div className="subHeading text-lg">
            <p>BEST RESTAURANT IN ISLAMABAD 2023</p>
          </div>
        </div>
      </div>

      <div className={`HeaderResponsive ${isLoaded ? "slide-in" : ""}`}>
        <div className="WraperResponsive flex justify-between items-center">
          <div className="logoResponsive">
            <img src={Logo} alt="Restaurant Logo" className="LogoRes" />
          </div>
          <div className="HeadingResponsive">
            <p className="textRes ">
              RESTAURANT OF THE YEAR IN PAKISTAN 2024 && BEST RESTAURANT IN
              ISLAMABAD 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerNav;
