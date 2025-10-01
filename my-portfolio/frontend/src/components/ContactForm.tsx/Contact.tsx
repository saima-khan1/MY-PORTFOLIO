import ContactForm from "./ ContactForm";

const ContactLabel = () => {
  return (
    <div>
      <div className="p-20 flex justify-center mt-10">
        {" "}
        <h1 className="text-2xl lg:text-5xl font-bold mt-4">
          Get In <span className="text-blue-500 ">Touch</span>
        </h1>
        {/* <p className="text-sm md:text-xl lg:text-2xl text-gray-700 leading-relaxed mt-6 max-w-3xl text-center ">
          Feel free to reach out. i'm always open to discussing new
          opportunities.
        </p> */}
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactLabel;
