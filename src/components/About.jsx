import Navbar from "./Navbar";
import Lottie from "lottie-react";
import Globe from "../assets/Globe.json";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function About() {
  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="text-green-300 p-5 md:text-5xl text-2xl text-center w-full font-bold pt-16">
          About EcoCharge Hub
        </h1>
        <p className="text-slate-200 p-5 text-xl leading-10 pt-10">
          Welcome to EcoCharge Hub, your go-to destination for seamless and
          sustainable electric vehicle charging. At EcoCharge Hub, we are
          committed to revolutionizing the way you power your electric vehicles,
          making green mobility accessible and affordable for all.
        </p>
      </div>
      <div className="">
        <h1 className="text-green-300 md:text-3xl text-2xl pl-4 pt-5 font-medium w-full ">
          Our Network
        </h1>
        <div className="sm:flex items-center">
          <p className="text-slate-200 p-5 text-xl leading-10 pt-2 ">
            With over 250+ strategically located charging stations across India,
            EcoCharge Hub is the largest and most reliable charging network in
            the country. Our extensive network ensures that you can travel
            wherever your journey takes you, with the confidence that a charging
            station is never too far away. A pioneering force in the realm of
            sustainable electric vehicle charging. At EcoCharge Hub, we are on a
            mission to redefine the future of transportation by providing
            accessible and eco-friendly charging solutions.
          </p>
          <Lottie animationData={Globe} className="w-1/2 mx-auto" />
        </div>
        <h1 className="text-green-300 md:text-3xl text-2xl pl-4 pt-5 font-medium w-full p-1">
          Cutting-Edge Fast Chargers
        </h1>
        <p className="text-slate-200 p-5 text-xl leading-10 pt-2">
          Equipped with cutting-edge fast chargers, EcoCharge Hub ensures that
          your electric vehicle is ready to roll in no time. Our chargers are
          designed to accommodate all types of electric vehicles, providing a
          quick and efficient charging experience that fits seamlessly into your
          lifestyle.
        </p>
        <h1 className="text-green-300 md:text-3xl text-2xl pl-4 pt-5 font-medium w-full p-1">
          Affordable Sustainability
        </h1>
        <p className="text-slate-200 p-5 text-xl leading-10 pt-2">
          We believe that sustainability should be accessible to everyone. Thats
          why EcoCharge Hub offers affordable charging solutions, making green
          mobility a practical choice for individuals and businesses alike. Our
          commitment to affordability is matched only by our dedication to a
          cleaner and greener future.
        </p>
        <h1 className="text-green-300 md:text-3xl text-2xl pl-4 pt-5 font-medium w-full p-1">
          EcoCharge Hub Mission
        </h1>
        <p className="text-slate-200 p-5 text-xl leading-10 pt-2">
          Our mission at EcoCharge Hub is to build a sustainable and
          interconnected electric vehicle charging infrastructure that empowers
          individuals and communities to embrace eco-friendly transportation. By
          making electric vehicle charging convenient, fast, and affordable, we
          aim to drive positive change and contribute to a cleaner planet. Join
          us on the journey towards a sustainable future. Charge up at EcoCharge
          Hub today!
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5331389.645478154!2d76.5543944474959!3d22.672213539050954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1706812086357!5m2!1sen!2sin"
          height="450"
          loading="lazy"
          className="w-full p-0 m-0"
        ></iframe>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default About;
