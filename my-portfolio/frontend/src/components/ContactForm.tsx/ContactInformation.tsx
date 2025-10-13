import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactInformation = () => {
  return (
    <div className="px-4 sm:px-6  lg:px-6 py-8 lg:py-12">
      <div className="mb-8">
        <h3 className="font-bold text-2xl sm:text-3xl text-gray-800 text-center lg:text-4xl sm:text-left">
          Contact Information
        </h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-start sm:items-center space-x-4 text-gray-700">
          <FaEnvelope className="text-blue-500 text-3xl sm:text-4xl" />
          <p className="text-base lg:text-2xl sm:text-lg">
            <span className="font-semibold">Email:</span> <br />
            <a
              href="mailto:saimakhan.6979@gmail.com"
              className="hover:text-blue-600 break-all"
            >
              saimakhan.6979@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-start sm:items-center space-x-4 text-gray-700">
          <FaPhoneAlt className="text-amber-500 text-3xl sm:text-4xl" />
          <p className="text-base lg:text-2xl sm:text-lg">
            <span className="font-semibold">Phone:</span> <br />
            <a href="tel:+123456" className="hover:text-blue-600">
              +123456
            </a>
          </p>
        </div>

        <div className="flex items-start sm:items-center space-x-4 text-gray-700">
          <FaLocationDot className="text-blue-500 text-3xl sm:text-4xl" />
          <p className="text-base  lg:text-2xl sm:text-lg">
            <span className="font-semibold">Location:</span> <br />
            Helsingborg, Sweden
          </p>
        </div>
      </div>

      <div className="mt-12 text-center sm:text-left">
        <h3 className="font-bold text-2xl  lg:text-4xl sm:text-3xl text-gray-800 mb-6">
          Connect with me
        </h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-3xl sm:text-4xl">
          <a
            href="https://github.com/saima-khan1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saimasanjeedakhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/yourfacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
