import Populermenu from "../Home/Populermenu";
// import UseMenu from "../Hooks/UseMenu";
import DESSERTS from "./DESSERTS/DESSERTS";
import Pizza from "./Pizza/Pizza";
import Soup from "./Soup/Soup";
import TodaysOffers from "./TodaysOffers/TodaysOffers";
import Saled from "./saled/Saled";


const OurMenu = () => {
  // const [popular, setPopular] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setPopular(data.filter((item) => item.category === "popular"))
  //     );
  // }, []);

  // alter native
  // const [menu] = UseMenu();
  


  
 

  return (
    <div>
      {/*  */}
      <div className=" mb-10 OURMENUIMG md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">OUR MENU</h3>
          <p className="text-gray-50">Would you like to try a dish?</p>
        </div>
      </div>
      {/*  */}
      <div className="md:w-1/3 m-auto p-5 text-center">
        <p className="text-[#D99904] text-xl">---Don't miss---</p>
        <h2 className="border-y-2 text-2xl border-gray-400 my-5 py-5">
          TODAY'S OFFER
        </h2>
      </div>
      {/*  */}
     <TodaysOffers></TodaysOffers>
      {/*  */}
      <div className=" mb-10 bg my-10 md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">DESSERTS</h3>
          <p className="text-gray-50">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      {/*  */}
      <DESSERTS></DESSERTS>
      {/*  */}
      <div className=" mb-10 bg my-10 md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">PIZZA</h3>
          <p className="text-gray-50">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      {/*  */}
      <Pizza></Pizza>
      {/*  */}
      <div className=" mb-10 bg my-10 md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">SALADS</h3>
          <p className="text-gray-50">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <Saled></Saled>
      {/*  */}
      <div className=" mb-10 bg my-10 md:h-[500px] flex justify-center items-center rounded-lg p-10">
        <div className="bg-black bg-opacity-50 md:w-[70%] text-white text-center p-10 rounded-lg">
          <h3 className=" text-4xl my-5 font-bold">SOUPS</h3>
          <p className="text-gray-50">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      {/*  */}
      <Soup></Soup>
      {/*  */}
    </div>
  );
};

export default OurMenu;
