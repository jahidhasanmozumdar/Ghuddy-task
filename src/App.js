import "./App.css";
import { useEffect, useState } from "react";
import Card from "./component/Card/Card";
function App() {
  // Icon button fetch
  const [buttonValue, setButtonValue] = useState([]);
  useEffect(() => {
    fetchButton();
  }, []);
  const fetchButton = async () => {
    const res = await fetch("propertyType.json");
    const data = await res.json();
    setButtonValue(data);
  };
  // const [isActive, setIsActive] = useState(false);
  // const handleActive = () => {};

  // destination fetch
  const [activeFilter, setActiveFilter] = useState(null); // Keeps track of the active filter
  const [hotelData, setHotelData] = useState([]); // Stores the list of hotel data to be displayed
  useEffect(() => {
    fetchHotelData(activeFilter);
  }, [activeFilter]);

  const fetchHotelData = async (propertyType) => {
    let url = "https://dev.ghuddy.link/api/v1/open/hotels";

    if (propertyType) {
      url += `?propertyType=${propertyType}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.esHotelCardList);
    setHotelData(data.esHotelCardList);
  };

  const handleClick = (value) => {
    if (activeFilter === value) {
      setActiveFilter(null); // Deselect the active filter
    } else {
      console.log(value);
      setActiveFilter(value);
    }
  };
  console.log(hotelData);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold lg:ml-[150px] ">Tours</h1>
        <div className="flex flex-row justify-center items-center mt-[50px] ">
          <div className="flex justify-center items-center gap-[50px]">
            {buttonValue?.map((buttons) => (
              <button
                onClick={() => handleClick(buttons.value)}
                key={Math.random()}
              >
                <div className="flex flex-col justify-center items-center">
                  <img className="w-6 h-6 mr-2" src={buttons.iconUrl} alt="" />
                  <p>{buttons.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="property-list">
          <h1>Top Destination</h1>
          {hotelData?.map((hotels) => (
            <Card hotels={hotels}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
