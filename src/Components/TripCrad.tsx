import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../Store/store';
import { GalleryItem } from '../Reducers/GalleryData';
import { Decrment } from '../Reducers/CounerSlice';

const TripCard = () => {
  const { productid } = useParams();
  const dispatch = useDispatch()

  const destinations = useSelector((state: RootState) => state.gallery.GalleryData);
    
  
  const UpdatedItem: GalleryItem | undefined = destinations.find(data => data.id === Number(productid));

  const HandleEvents = () => {
    dispatch(Decrment())
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={UpdatedItem!.imgSrc}
            alt={UpdatedItem?.country}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{UpdatedItem?.tripDuration}</h3>
            <p className="text-gray-600 my-2">{UpdatedItem!.description}</p>
            <p className="text-lg font-semibold text-gray-900">Price: {UpdatedItem?.price}</p>
            <div className="mt-4">
              <p className="w-full flex justify-center items-center bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Booked 
              </p>
              <Link to={'/card'}><button onClick={HandleEvents} className="w-full mt-3  bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Cancel Reservation 
              </button></Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default TripCard;

