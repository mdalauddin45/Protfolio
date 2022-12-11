import React from "react";
import { useState } from "react";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SmallSpinner from "../../components/Spinner/SmallSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   console.log(name, email, message);
  // };
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-900 shadow-sm">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src="assets/svg/doodle.svg"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form
          action="https://formspree.io/f/xnqrewpk"
          method="POST"
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label className="text-sm">Full name</label>
            <input
              name="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded border shadow-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="w-full p-3 rounded border shadow-sm"
              data-temp-mail-org="1"
              required
            />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="3"
              name="message"
              className="w-full p-3 rounded border shadow-sm"
              required
            ></textarea>
          </div>
          <PrimaryButton
            type="submit"
            classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
          >
            {loading ? <SmallSpinner /> : "Send Message"}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
