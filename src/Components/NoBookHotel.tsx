import { Link } from 'react-router-dom'

const NoBookHotel = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
              <div className="text-6xl text-blue-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17l3 3L22 10M5 12l-2-2m0 0l5 5m-5-5l5-5"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                No Hotels Booked
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                You currently have no hotels booked. Explore our options and
                start planning your next trip!
              </p>
              <Link to={`/card/Hotels`}>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all">
                  Browse Hotels
                </button>
              </Link>
            </div>
          </div>
    </>
  )
}

export default NoBookHotel
