import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully! ✅");
        form.current?.reset();
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="px-30 py-15 border-4 border-amber-500 rounded-2xl">
      <h3 className="font-bold text-3xl text-gray-800 lg:text-4xl  mb-10 text-center">
        Send a message!
      </h3>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          {" "}
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-gray-800  dark-text-white text-xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name..."
            required
          />
        </div>
        <div>
          {" "}
          <label
            htmlFor="email"
            className="mb-2 block  font-medium text-xl mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="Enter your email adresss.."
            className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="mb-2 block  font-medium text-xl text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border-2  rounded-lg  focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" bg-amber-500 text-white border-4 rounded-full  px-20 py-4 shadow-lg hover:bg-amber-600  transition duration-300 ease-in-out mt-10 "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
