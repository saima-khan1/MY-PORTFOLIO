const ContactForm = () => {
  return (
    <div className="px-50 py-50 border-4  rounded-2xl">
      <h3 className="text-xl lg:text-4xl font-bold mb-10 text-center">
        Send a message!
      </h3>
      <form>
        <div>
          {" "}
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-gray-800 text-center dark-text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="px-20  py-4 border-4  rounded-2xl "
            placeholder="Enter your name..."
            required
          />
        </div>
        <div>
          {" "}
          <label
            htmlFor="email"
            className="mb-2 block text-center font-medium text-small mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email adresss.."
            className="px-20  py-4 border-4  rounded-2xl "
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-center font-medium text-small mt-4"
          >
            Message
          </label>
          <input
            type="message"
            id="message "
            className="px-20  py-8 border-4  rounded-2xl "
            placeholder="Type Your Message here...."
            required
          />
        </div>
        <div className="flex justify-center">
          <button className=" bg-amber-500 text-white border-4 rounded-full  px-6 py-3 shadow-lg hover:bg-amber-600  transition duration-300 ease-in-out mt-10 ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
