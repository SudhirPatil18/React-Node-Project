import React from 'react';
import bg from "../assest/bg.jpg";
import logo1 from "../assest/logo1.jpeg"
import Footer from './components/Footer';
const About = () => {
  return (
    <div className=''>

      <div className="bg-cover bg-center object-cover w-full h-80 flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
        <p className="text-center text-5xl text-zinc-100 hover:text-green-500 hover:animate-bounce">About Us</p>
      </div>
      <div className=''>
        <div>

          <div className="w3-content" style={{ maxWidth: '1100px', margin: 'auto' }}>

            {/* About Section */}
            <div className="w3-row w3-padding-64" id="about">
              <div className="w3-col m6 w3-padding-large w3-hide-small">
                <img src={logo1} className="w3-round w3-image w3-opacity-min" alt="Table Setting" style={{ width: '100%' }} />
              </div>

              <div className="w3-col m6 w3-padding-large">
                <h1 className="w3-center text-2xl">About Milko</h1>
                <br />
                <h5 className="w3-center">Tradition since 2020</h5>
                <p className="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <hr />

            {/* Menu Section */}
            <div className="w3-row w3-padding-64" id="menu">
              <div className="w3-col l6 w3-padding-large">
                <h1 className="w3-center text-2xl">Our Menu</h1><br />
                <h3>Bread Basket</h3>
                <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                <h4>Honey Almond Granola with Fruits</h4>
                <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                <h3>Bread Basket</h3>
                <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />

                <h3>Bread Basket</h3>
                <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                <h3>Bread Basket</h3>
                <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
              </div>

              <div className="w3-col l6 w3-padding-large">
                <img src={bg} className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: '100%' }} />
              </div>
            </div>


          </div>
        </div>

      </div>
      <div>
        {/* Promo Section "Statistics" */}
        <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
          <div className="w3-quarter">
            <span className="w3-xxlarge">14+</span>
            <br />Partners
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">55+</span>
            <br />Projects Done
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">89+</span>
            <br />Happy Clients
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">150+</span>
            <br />Meetings
          </div>
        </div>

        {/* Team Section */}
        <div className="w3-container w3-padding-64" id="team">
          <h3 className="w3-center text-3xl">THE TEAM</h3>
          <p className="w3-center w3-large text-2xl">The ones who run this company</p>
          <div className="w3-row-padding w3-grayscale" style={{ marginTop: '64px' }}>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={logo1} alt="Mike" style={{ width: "180px", height: "200px", margin: "auto" }} />
                <div className="w3-container">
                  <h3 className='text-center'>Mike Ross</h3>
                  <p className="w3-opacity text-center">Web Designer</p>
                  <p className='ml-8 mb-10'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>

            </div>
            {/* Repeat similar structure for other team members */}
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={logo1} alt="Mike" style={{ width: "180px", height: "200px", margin: "auto" }} />
                <div className="w3-container">
                  <h3 className='text-center'>Mike Ross</h3>
                  <p className="w3-opacity text-center">Web Designer</p>
                  <p className='ml-8 mb-10'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={logo1} alt="Mike" style={{ width: "180px", height: "200px", margin: "auto" }} />
                <div className="w3-container">
                  <h3 className='text-center'>Mike Ross</h3>
                  <p className="w3-opacity text-center">Web Designer</p>
                  <p className='ml-8 mb-10'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src={logo1} alt="Mike" style={{ width: "180px", height: "200px", margin: "auto" }} />
                <div className="w3-container">
                  <h3 className='text-center'>Mike Ross</h3>
                  <p className="w3-opacity text-center">Web Designer</p>
                  <p className='ml-8 mb-10'>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                  <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>


  );
}

export default About;
