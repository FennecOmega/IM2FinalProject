import "../../index.css"
import bakingbread1 from "/data/images/BakingBread.jpg";
import bakingbread2 from "/data/images/BakingBread2.jpg";

//war and peace

function AboutUs() {
  return (
    <>
      <div className="flex flex-wrap mt-20">
       
        <div className="flex items-center">
          We are Walter White Bakery
        </div>
        <div className="flex items-center">
          <img src={bakingbread1}/>
          <p>Jesse Pinkman and Walter White recreate our famous White Bread.</p>
        </div>

        <div className="flex items-center">
          <img src={bakingbread2}/>
          <p>Walter White holding our signature White Bread.</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
