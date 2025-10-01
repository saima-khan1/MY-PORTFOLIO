import ContactForm from "./ ContactForm";
import ContactInformation from "./ContactInformation";

const ContactLabel = () => {
  return (
    <div className="px-6 md:px-20 py-30">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a question, a project
          idea, or just want to connect — feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" p-8">
          <ContactInformation />
        </div>

        <div className=" p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactLabel;
