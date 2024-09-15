import '../CSS/ImageGallery.css'
import { FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GalleryItem } from '../Reducers/GalleryData';

type CardProps = {
    destination : GalleryItem
}

const DestinationCard = ({ destination } : CardProps ) => {
    return (
      <li>
      <figure>
          <Link to={`/DisplayCard/${destination.id}`}>
              <img className="imageFigure" src={destination.imgSrc} alt={destination.altText} />
          </Link>
          <figcaption>
              <main>
                  <p className="small">{destination.tripDuration}</p>
                  <h3>{destination.destination}, <em>{destination.country}</em></h3>
                  <p>{destination.description}</p>
              </main>
              <footer>
                  <div>
                      <p className="small">From</p>
                      <p className="price">{destination.price}</p>
                  </div>
                  <p><FaForward/></p>
              </footer>
          </figcaption>
      </figure>
  </li>
  
    );
  };

  export default DestinationCard