import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            <span className="text-green-300">Electric Updates,</span> Direct to
            Your Inbox
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-green-300 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-green-300">
              <Link to="/privacypolicy">Privacy Policy.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
