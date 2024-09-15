import { createSlice } from "@reduxjs/toolkit";
import Trip1 from "../Assests/Resturant4.jpg";
import Trip2 from "../Assests/Res5.jpeg";
import Trip4 from "../Assests/Resturant4.jpg";
import Trip5 from "../Assests/Res1.png";

export interface GalleryItem {
  id: number;
  imgSrc: string;
  altText: string;
  tripDuration: string;
  destination: string;
  country: string;
  description: string;
  price: string;
}

interface GalleryState {
  GalleryData: GalleryItem[];
}

const initialState: GalleryState = {
  GalleryData: [
    {
      id: 1,
      imgSrc: Trip5,
      altText: "Serena Hotel, Pakistan",
      tripDuration: "5-day stay",
      destination: "Serena Hotel, Islamabad",
      country: "Pakistan",
      description:
        "Experience luxury at Serena Hotel Islamabad, offering top-class amenities with a scenic view of Margalla Hills.",
      price: "50,000rs",
    },
    {
      id: 2,
      imgSrc: Trip1,
      altText: "Pearl Continental, Pakistan",
      tripDuration: "7-day stay",
      destination: "Pearl Continental, Lahore",
      country: "Pakistan",
      description:
        "Enjoy a comfortable stay at Pearl Continental Lahore, located in the heart of the city with close proximity to cultural landmarks.",
      price: "40,000rs",
    },
    {
      id: 3,
      imgSrc: Trip2,
      altText: "Mövenpick Hotel, Pakistan",
      tripDuration: "6-day stay",
      destination: "Mövenpick Hotel, Karachi",
      country: "Pakistan",
      description:
        "Relax in style at Mövenpick Hotel Karachi, offering exceptional services with an international flair.",
      price: "45,000rs",
    },
    {
      id: 4,
      imgSrc: Trip4,
      altText: "Shangri-La Resort, Pakistan",
      tripDuration: "8-day stay",
      destination: "Shangri-La Resort, Skardu",
      country: "Pakistan",
      description:
        "Stay at Shangri-La Resort Skardu and enjoy breathtaking views of the Himalayas, with luxurious rooms and exceptional service.",
      price: "55,000rs",
    },
  ],
 
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    fetchData: (state) => {
      return state;
    },
  },
});

export const { fetchData  } = gallerySlice.actions;

export default gallerySlice.reducer;
