import React, { useState } from "react";
import contact from "../assets/contact2.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [undoTimeoutId, setUndoTimeoutId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setIsSubmitted(true);
    setUndoTimeoutId(
      setTimeout(() => {
        setIsSubmitted(false);
        setUndoTimeoutId(null);
      }, 4000)
    );
  };

  const handleUndo = () => {
    setIsSubmitted(false);
    clearTimeout(undoTimeoutId);
  };

  return (
    <div id="Contact" className="min-h-screen bg-gradient-to-b from-dark-blue to-darker-blue p-14">
      <h4 className="font-roboto font-thin text-gray-400 text-sm mb-1 mx-1">GET IN TOUCH</h4>
      <h2 className="font-semibold text-6xl mb-20 md:mb-16">Contact Me</h2>

      <div className="flex flex-row md:justify-around sm:justify-start items-center box-border">      
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center">
          <div className="mb-4">
            <label className="block text-gray-200 font-sans font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-80 lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 mt-3">
            <label className="block text-gray-200 font-sans font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-80 lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-12 mt-3">
            <label className="block text-gray-200 font-sans font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-80 lg:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {!isSubmitted && (
            <button
              className="bg-blue-700 text-gray-100 font-sans font-medium py-2 px-4 rounded transition duration-100 delay-100 hover:bg-blue-600 hover:scale-105 active:scale-95 focus:text-gray-200 focus:opacity-70 focus:outline-none focus:shadow-inner"
              type="submit"
            >
              Send Message
            </button>
          )}
            {isSubmitted && (
                <div className="flex flex-row items-center">
                    <p className="text-gray-200 font-sans font-semibold py-2 px-4 rounded transition duration-100 delay-100">
                        Message sent!
                    </p>
                    <button
                        className="bg-red-700 text-gray-100 font-sans font-semibold py-2 px-4 rounded transition duration-100 delay-100 hover:bg-red-600 hover:scale-105 active:scale-95 focus:text-gray-200 focus:opacity-70 focus:outline-none focus:shadow-inner"
                        type="button"
                        onClick={handleUndo}
                    >   
                        Undo
                    </button>
                </div>
            )}
        </form>

        <div className="hidden md:flex flex-col items-center justify-center">
            <img src={contact} alt="contact" className="w-96 h-96" />
        </div>
        </div>
    </div>
    );
};

export default Contact;
         
