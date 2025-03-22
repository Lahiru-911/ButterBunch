"use client"
import React, { useState } from "react";

const Contact = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Here you can add your form submission logic, e.g., calling an API or handling form data

    // For demonstration purposes, show success message
    setSuccessMessageVisible(true);
  };

  return (
    <div>
      <div className="relative h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source src="/g.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-shadow-lg text-center">
          Get in Touch with Us
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Contact Details */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-[#C1932D] text-3xl">Contact Details</h2>
            <ul className="list-none p-0 mt-4">
              <li className="text-lg mb-4"><strong>Location:</strong> Thamaravila Wilpattu, Sri Lanka</li>
              <li className="text-lg mb-4">
                <strong>Phone:</strong>
                <a href="tel:+94112345678" className="text-inherit">
                  +94 11 234 5678
                </a>
              </li>
              <li className="text-lg mb-4">
                <strong>Email:</strong>
                <a href="mailto:info@thamaravilawilpattu.com" className="text-[#C1932D]">
                  info@thamaravilawilpattu.com
                </a>
              </li>
              <li className="text-lg mb-4">
                <strong>Social Media:</strong>
                <a href="https://www.facebook.com/thamaravilawilpattu" target="_blank" className="text-[#C1932D]">
                  Facebook
                </a> |
                <a href="https://www.instagram.com/thamaravila_wilpattu/" target="_blank" className="text-[#C1932D]">
                  Instagram
                </a> |
                <a href="https://www.tripadvisor.com/Hotel_Review-g3186994-d17768551-Reviews-Thamaravila_Wilpattu_Luxury_Tented_Safari_Villas-Wilpattu_National_Park_North_Wester.html"
                  target="_blank" className="text-[#C1932D]">
                  Tripadvisor
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="flex-1 min-w-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.3561121586267!2d80.1487545!3d8.2673077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcfda949347343%3A0x52a8a7c740ff87a5!2sThamaravila%20Wilpattu%20-%20Luxury%20Tented%20Game%20Lodge!5e0!3m2!1sen!2slk!4v1739896140996!5m2!1sen!2slk"
              width="100%"
              height="350"
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-screen-xl">
        <div className="booking-form mb-16">
          <h2 className="text-[#C1932D] text-3xl">Book Your Stay</h2>
          <form
            id="bookingForm"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 mt-6"
            onSubmit={handleSubmit}
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="4c6c3922-583d-4677-9bc3-c43ae37c4720" />

            <div>
              <label htmlFor="name" className="text-lg">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-lg">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-lg">Special Requests</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Any special requests?"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#C1932D] text-white py-2 px-6 rounded-lg text-lg cursor-pointer hover:bg-black hover:text-[#C1932D]"
            >
              Submit
            </button>

            {/* Success Message */}
            {successMessageVisible && (
              <p
                id="successMessage"
                className="text-green-600 text-lg mt-4"
              >
                Your booking has been submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
