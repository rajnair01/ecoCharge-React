import Footer from "./Footer";
import Navbar from "./Navbar";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <h1 className="text-green-300 p-5 pb-0 text-3xl w-full font-medium pt-16">
        Privacy Policy
      </h1>
      <p className="text-gray-300 p-5 text-xl leading-10 pt-10">
        EcoCharge Hub is committed to ensuring the privacy and security of your
        personal information. This Privacy Policy outlines how we collect, use,
        and protect the information you provide to us.
      </p>
      <p className="text-green-300 px-5 pb-0 text-2xl leading-10 pt-5 md:text-5xl">
        Information We Collect
      </p>
      <ul className="text-gray-300 p-5 list-disc ml-2 md:text-xl md:ml-5">
        <li className="">
          Contact Information: This includes your name, email address, and phone
          number.
        </li>
        <li className="pt-2">
          Billing Information: When you make a transaction, we may collect
          billing details.
        </li>
        <li className="pt-2">
          Usage Data: We collect information about your usage of our charging
          stations and services.
        </li>
        <li className="pt-2">
          Device Information: We may collect information about the device you
          use to access our services.
        </li>
      </ul>
      <p className="text-green-300 p-5 pb-2 text-2xl leading-10 pt-5 md:text-xl">
        How We Use Your Information
      </p>
      <ul className="text-gray-300 px-5 list-disc ml-2 md:text-xl md:ml-5">
        <li>
          Providing Services: To provide and maintain our electric vehicle
          charging services.
        </li>
        <li className="pt-2">
          Communications: To inform you about updates, changes, or improvements
          to our services.
        </li>
        <li className="pt-2">
          Transactions: To process transactions and send transaction-related
          information.
        </li>
        <li className="pt-2">
          Customer Support: To provide customer support and address inquiries.
        </li>
      </ul>
      <div>
        <p className="text-green-300 p-5 pb-0 text-xl leading-10 pt-5 md:text-xl">
          Data Security
        </p>
        <p className="text-gray-300 px-5 md:text-xl md:pb-0">
          We take measures to protect your information and ensure its
          confidentiality. However, no method of transmission over the internet
          or electronic storage is entirely secure, and we cannot guarantee
          absolute security.
        </p>
        <p className="text-green-300 px-5 pb-0 text-xl leading-10 pt-5 md:text-xl">
          Sharing Your Information
        </p>
        <p className="text-gray-300 px-5 md:text-xl">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties unless we provide you with advance notice. This
          does not include trusted third parties who assist us in operating our
          website, conducting our business, or servicing you, as long as those
          parties agree to keep this information confidential.
        </p>
        <p className="text-green-300 px-5 pb-0 text-2xl leading-10 pt-5 md:text-xl">
          Cookies
        </p>
        <p className="text-gray-300 px-5 md:text-xl">
          We use cookies to enhance your experience on our website. You can
          choose to disable cookies in your browser settings, but this may
          affect your ability to access certain features of our site.
        </p>
        <p className="text-green-300 px-5 pb-0 text-2xl leading-10 pt-5 md:text-xl">
          Changes to This Policy
        </p>
        <p className="text-gray-300 px-5 md:text-xl">
          This Privacy Policy is effective as of [Effective Date] and will
          remain in effect except with respect to any changes in its provisions.
          We reserve the right to update or change our Privacy Policy at any
          time, and you should check this Privacy Policy periodically.
        </p>
        <p className="text-green-300 px-5 pb-0 text-2xl leading-10 pt-5">
          Contact Us
        </p>
        <p className="text-gray-300 px-5">
          If you have any questions about this Privacy Policy, please contact us
          at <span className="text-green-300">random@email.com</span>
        </p>
      </div>
      <Footer />
    </>
  );
}
export default PrivacyPolicy;
