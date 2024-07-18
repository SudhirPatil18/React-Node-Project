import React from 'react'
import bg1 from "../assest/bg1.jpeg"
const Contact = () => {
  return (
    <div className=''>

    <div className="bg-cover bg-center object-cover w-full h-80 flex items-center justify-center" style={{backgroundImage: `url(${bg1})`}}>
    <p className="text-center text-5xl text-zinc-100 hover:text-green-500 hover:animate-bounce">Contact Us</p>
  </div>
  <div style={{backgroundImage: "url(${bg1})", height:"100%", width:"100%"}}>
  <div className="container mx-auto py-20" >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore <div>et dolore magra aliqua. Ut enim ad minim veniam.</div>
        </div>
      </div>
      <div className="flex mt-16">
      <div className="w-1/2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30259.781134136785!2d73.94597279999999!3d18.5527185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3288ba495%3A0x38e833613a63004a!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715865153657!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Map"></iframe>
        </div>
        <div className="w-1/2">
          <div className="flex items-center mb-8">
            <img src="image/marker.png" alt="location" className="icon bg-white rounded-full p-3" />
            <div className="ml-4">
              <div className="text-lg font-semibold mb-1">Address</div>
              <div className="text-base">1002 West 5th Ave,</div>
              <div className="text-base">Alaska, New York,</div>
              <div className="text-base">55060.</div>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <img src="image/phone.png" alt="phone" className="icon bg-white rounded-full p-3" />
            <div className="ml-4">
              <div className="text-lg font-semibold mb-1">Phone</div>
              <div className="text-base">12523-4566-8954-8956.</div>
            </div>
          </div>
          <div className="flex items-center">
            <img src="image/mail.png" alt="email" className="icon bg-white rounded-full p-3" />
            <div className="ml-4">
              <div className="text-lg font-semibold mb-1">Email</div>
              <div className="text-base">contactemail@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-lg p-8">
          <form>
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-base font-semibold mb-2">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="form-field border border-gray-300 w-full rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-semibold mb-2">Email</label>
              <input type="text" id="email" name="email" className="form-field border border-gray-300 w-full rounded-md px-3 py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-base font-semibold mb-2">Type your message...</label>
              <input type="text" id="message" name="message" className="form-field border w-full border-gray-300 rounded-md px-3 py-2" />
            </div>
            <button type="button" className="send-btn bg-blue-500 text-white py-2 px-6 m-auto rounded-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default Contact