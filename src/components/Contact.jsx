import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { BiHome } from "react-icons/bi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Navbar />
      <p className="text-green-300 text-center text-2xl font-bold pt-10 md:text-3xl">
        Get in Touch
      </p>
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="text-white text-xl md:text-3xl pt-10 pl-2 pb-2 flex items-center ">
            <BiHome />
            <p className="pl-2 font-bold">Head Office</p>
          </div>
          <ul className="text-white pl-10 md:text-xl md:pl-12">
            <li className="font-medium">EcoCharge Hub Corp.</li>
            <li>1610 - 777</li>
            <li>India, Asia</li>
            <li>Earth, Solar System</li>
            <li>Milkyway Galaxy</li>
          </ul>
          <div className="text-xl">
            <div className="text-white pt-10 pl-2 flex items-center md:font-bold">
              <IoMailUnreadOutline className="text-xl" />
              <p className="pl-2">random@email.com</p>
            </div>
            <div className="text-white pl-2 flex items-center md:font-bold">
              <IoMailUnreadOutline className="text-xl" />
              <p className="pl-2">indo@randomemail.com</p>
            </div>
          </div>
          <div className="text-xl">
            <div className="text-white pt-10 md:pt-16 flex pl-2 items-center font-medium">
              <IoCallOutline className="text-xl" />
              <p className="pl-2">+1 609 745 0760</p>
            </div>
            <div className="text-white flex pl-2 items-center font-medium">
              <IoCallOutline className="text-xl" />
              <p className="pl-2">+1 609 746 3386</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-white text-xl pt-10 items-center pl-2 md:pl-0 md:font-bold md:text-right">
            <p className="">Investor Relations</p>
            <p className="text-green-300">+1 800 564 6253</p>
            <p className="text-green-300">+1 800 564 5252</p>
          </div>
          <div className="text-white text-xl pt-10 pl-2 items-center md:font-bold">
            <p className="text-gray-200 md:text-right hidden md:block">
              The information provided on this website is for general
              informational purposes only. While we strive to keep the
              information up to date and accurate, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose.
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5331389.645478154!2d76.5543944474959!3d22.672213539050954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1706812086357!5m2!1sen!2sin"
          height="450"
          loading="lazy"
          className="md:w-1/3 w-screen mr-10 md:ml-36 mt-10"
        ></iframe>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Contact;
