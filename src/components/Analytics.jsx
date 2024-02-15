import Newsletter from "./Newsletter";
import Lottie from "lottie-react";
import Charger from "../assets/charger.json";
import Car from "../assets/car-white.json";

function Analytics() {
  return (
    <>
      <div className="h-[80vh] md:h-full ">
        <div className="bg-black md:w-1/2 md:flex md:flex-col">
          <p className="text-white text-5xl p-5 pb-0 font-bold text-left">
            Empowering Journeys,
          </p>
          <p className="text-green-300 text-5xl text-right p-5">
            Charging the Future.
          </p>
        </div>
        <p className="text-white p-2 md:p-10">
          As pioneers in the electric vehicle charging industry, EcoCharge Hub
          boasts a network of over 250 charging stations across India. We are
          not just a charging station; we are a movement, empowering electric
          vehicle users with convenient and affordable charging solutions.
        </p>
        <div className="md:flex md:bg-white justify-center items-center">
          <Lottie animationData={Charger} className="w-screen md:hidden" />
          <p className="text-white text-center pt-5 md:hidden">
            Experience the Future of Mobility. Regardless of your electric
            vehicle type – scooter, sedan, or SUV – EcoCharge Hub ensures a
            seamless charging experience.
          </p>
          <div className="hidden md:block w-1/2">
            <p className="text-black text-center text-5xl w-full font-bold">
              Experience the Future of Mobility.
            </p>
            <p className="text-black font-normal text-center pt-5 text-2xl">
              Regardless of your electric vehicle type – scooter, sedan, or SUV
              – EcoCharge Hub ensures a seamless charging experience. Our
              charging stations are equipped with cutting-edge fast chargers
              capable of juicing up all types of electric vehicles quickly.
            </p>
          </div>
          <Lottie animationData={Car} className="md:block hidden h-screen" />
        </div>
      </div>

      <Newsletter />
    </>
  );
}
export default Analytics;
