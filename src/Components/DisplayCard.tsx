import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../Store/store";
import { GalleryItem } from '../Reducers/GalleryData';
import { BsForward } from "react-icons/bs";
import { Incrment } from "../Reducers/CounerSlice";

const DisplayCard = () => {
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>();  

    const destinations = useSelector((state: RootState) => state.gallery.GalleryData);
    
  
    const UpdatedItem: GalleryItem | undefined = destinations.find(data => data.id === Number(id));

    if (!UpdatedItem) {
        return <p>No destination found.</p>; 
    }
    
    return (
      <section className="flex flex-col m-6 md:flex-row gap-8 p-6 max-w-5xl mx-auto border border-gray-200 rounded-lg bg-gray-100">
        
        <div className="flex-1">
          <img className="w-[200%] h-full object-cover rounded-lg" src={UpdatedItem.imgSrc} alt={UpdatedItem.altText} />
        </div>

        
        <div className="flex-2 flex flex-col justify-between">
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">
              {UpdatedItem.destination}, <em className="text-gray-500">{UpdatedItem.country}</em>
            </h2>
            <p className="text-lg text-gray-600 mb-4">{UpdatedItem.tripDuration}</p>
            <p className="text-base text-gray-700">{UpdatedItem.description}</p>
          </div>

         
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-sm text-gray-500">From</p>
              <p className="text-2xl font-semibold">{UpdatedItem.price}</p>
            </div>
            <Link to={`/card/${UpdatedItem.id}`}><button onClick={()=> {
              dispatch(Incrment())
              
            }} className="text-xl text-blue-500 border-blue-400  border-2 flex p-3 hover:border-blue-600 rounded-xl   hover:text-blue-600 transition duration-200">
               <p >Book now</p>
               <BsForward className="flex justify-center items-center mt-[0.35rem]" />
            </button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default DisplayCard;
