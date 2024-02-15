import { ReactTyped } from "react-typed";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Analytics from "./Analytics";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <p className="text-green-300 font-bold p-2 uppercase">
            Charging Solutions for Tomorrow&#39;s World
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Your Journey, Our Charge
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Energizing the Future
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["Today", "Tomorrow", "Always"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Empowering Tomorrow's Commute: EcoCharge Hub Pioneers Sustainable EV
            Charging Solutions.
          </p>
          <button className="bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
      <Analytics />
      <Footer />
    </>
  );
};
export default Hero;
