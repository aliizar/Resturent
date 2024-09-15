
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';

import DestinationCard from "./DestinationCard";

const HotelsData = () => {
    
  const destinations = useSelector((state : RootState) => state.gallery.GalleryData);
  return (
    <ul className="gallery">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
    </ul>
  )
}

export default HotelsData
