import "../index.css";
import bakingbread1 from "../data/images/BakingBread.jpg";
import bakingbread2 from "../data/images/BakingBread2.jpg";

function AboutUs() {
  return (
    <>
      <div>
        <div className="content-center items-center">
          We are Walter White Bakery
        </div>
        <div>
          <img src={bakingbread1} className="object-scale-down h-120 w-240" />
          <p>Jesse Pinkman and Walter White recreate our famous White Bread.</p>
        </div>

        <div>
          <img src={bakingbread2} className="opacity-50 object-fill" />
          <p>Walter White holding our signature White Bread.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
