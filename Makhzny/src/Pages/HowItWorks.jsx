import React from "react";
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import "../Styles/Works.css";

function HowItWorks() {
  return (
    <div>
      <div className="Rent-Bar">
        <div className="Rent-Bar-box">
          <h2>How It Works ?</h2>
          <p>
            Utilizing our state-of-the-art storage facilities is a
            straightforward process at Makhzny. Follow the simple steps to make
            the most of your storage experience.
          </p>
        </div>
      </div>

      <div className="howit-works-content">
        <div className="howit-step image-right">
          <div className="howit-text">
            <h3> Storage Made Simple!</h3>
            <p>
              Storage as easy as 1, 2, 3. Once you choose the appropriate size
              for your needs, you can start with us.
            </p>
          </div>
          <img src={work1} alt="Step 1" />
        </div>

        <div className="howit-step image-close">
          <img src={work2} alt="Step 2" />
          <div className="howit-text">
            <h3> Simplify Your Space Journey!</h3>
            <p>
              All the processing is online and all you need is to book and
              signup to start freeing up some space.
            </p>
          </div>
        </div>

        <div className="howit-step image-right">
          <div className="howit-text">
            <h3> Storage Made Simple!</h3>
            <p>
              To know all the required conditions, or to simply inquire about
              details regarding your storage situation, please don’t hesitate to
              contact us..
            </p>
          </div>
          <img src={work1} alt="Step 3" />
        </div>

        <div className="howit-step image-close">
          <img src={work2} alt="Step 4" />
          <div className="howit-text">
            <h3> Start Living Lighter!</h3>
            <p>Store with us now. And Make your life easier.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
