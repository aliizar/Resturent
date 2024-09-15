import { useParams } from "react-router-dom";
import TripCrad from "./TripCrad";
import NoBookHotel from "./NoBookHotel";
const Counter = () => {
  const { productid } = useParams();

  return <>{productid ?  <TripCrad /> :  <NoBookHotel /> }</>;
};

export default Counter;
