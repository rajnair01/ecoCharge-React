import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cards() {
  return (
    <>
      <Navbar />
      <div className="w-full py-[6rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={Single} alt="" className="w-20 mx-auto mt-[-3rem]" />
            <h2 className="text-2xl font-bold text-center py-8">
              Single User Plan
            </h2>
            <p className="text-center text-4xl font-bold">$49</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                <span className="font-bold">Affordability:</span> Our Single
                User Plan is perfect for individuals who own a single electric
                vehicle and are looking for a budget-friendly charging solution.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Exclusive Access:</span> Enjoy
                exclusive access to our extensive network of charging stations,
                providing convenient charging options wherever you go.
              </p>

              <p className="py-2 border-b mx-8">
                <span className="font-bold">Flexible Billing:</span> Benefit
                from flexible billing options, allowing you to choose the
                payment method that suits your preferences.
              </p>

              <p className="py-2 border-b mx-8">
                <span className="font-bold">24/7 Customer Support:</span>
                Receive priority customer support available 24/7 to assist you
                with any queries or concerns.
              </p>
            </div>
            <button className="bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={Double} alt="" className="w-20 mx-auto mt-[-3rem]" />
            <h2 className="text-2xl font-bold text-center py-8">
              Double User Plan
            </h2>
            <p className="text-center text-4xl font-bold">$99</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                <span className="font-bold">Dual Access:</span> Ideal for
                households with two electric vehicles, our Double User Plan
                grants access to two simultaneous charging sessions.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Enhanced Speed:</span> Experience
                faster charging speeds compared to the Single User Plan,
                reducing the time required to charge your electric vehicles.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Additional Discounts:</span> Enjoy
                exclusive discounts on partner services and products related to
                electric vehicles.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Priority Charging:</span> Get
                priority access during peak hours, ensuring you can charge your
                vehicles at your convenience.
              </p>
            </div>
            <button className="bg-black text-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img src={Triple} alt="" className="w-20 mx-auto mt-[-3rem]" />
            <h2 className="text-2xl font-bold text-center py-8">
              Triple User Plan
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                <span className="font-bold">Ultimate Convenience:</span> The
                Triple User Plan is designed for families or electric vehicle
                enthusiasts with three vehicles, providing the ultimate
                convenience in charging.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Ultra-Fast Charging:</span> Benefit
                from the fastest charging speeds available, minimizing downtime
                and maximizing your electric vehicle usage.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">Premium Support:</span> Access
                premium customer support services with a dedicated support
                representative for prompt assistance.
              </p>
              <p className="py-2 border-b mx-8">
                <span className="font-bold">VIP Access:</span> Receive VIP
                access to special events, promotions, and new charging station
                launches.
              </p>
            </div>
            <button className="bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cards;
