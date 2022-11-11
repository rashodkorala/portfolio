import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-bg">
      <div class="max-w-[1000px] mx-auto px-4 flex flex-col justify-center items-center h-full text-white xsm:px-5">
        <h1 className="text-4xl font-bold">Contact</h1>
        <form
          action="https://getform.io/f/b61520b6-64ed-4215-8bae-b9969500dd78"
          method="POST"
          className="flex flex-col max-w-[600px] w-full p-8 bg-bg"
          autoComplete="off" 
        >
          <div className="text-md">
            <input
              className="my-4 bg-bg p-2 w-full border-b border-white focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 bg-bg p-2 w-full border-b border-white focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="my-4 bg-bg p-2 w-full border border-white focus:outline-none focus:border-blue-500"
              placeholder="Message"
              name="message"
              rows={10}
            ></textarea>
            <button className="bg-cyan-600 border-2 border-black rounded-[40px] px-8 py-2 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
