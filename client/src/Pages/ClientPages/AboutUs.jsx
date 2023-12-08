import "../../index.css";
import { Link } from "react-router-dom";
import bancup1 from "/data/images/bancup-1.jpg";
import bancup2 from "/data/images/bancup-2.jpg";
import bancup3 from "/data/images/bancup-3.jpg";

function AboutUs() {
  return (
    <>
      <div className="container p-8 mx-auto mt-8">
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to
            <span className="relative inline-block p-1 mx-3 before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-yellow-400 before:shadow-xl before:shadow-yellow-900/75">
              <span className="relative text-white">Banana Cupcake</span>
            </span>
          </h1>
          <p className="mt-10 text-emerald-700">
            Delicious Cupcakes For You and Your Family
          </p>
        </section>
        <section className="mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <img
                className="object-cover w-full transition duration-500 ease-in-out rounded-2xl h-60 hover:scale-105"
                src={bancup1}
                alt=""
              />
            </div>
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <img
                className="object-cover w-full transition duration-500 ease-in-out rounded-2xl h-60 hover:scale-105"
                src={bancup2}
                alt=""
              />
            </div>
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <img
                className="object-cover w-full transition duration-500 ease-in-out rounded-2xl h-60 hover:scale-105"
                src={bancup3}
                alt=""
              />
            </div>
          </div>
          <div className="w-32 mx-auto">
            <Link to="/signup-page">
              <button className="w-full px-2 py-4 my-6 text-white shadow-xl bg-amber-900 rounded-xl hover:bg-amber-700">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </div>
      <div className="h-fit bg-gradient-to-tr from-amber-100 to-lime-50">
        <div className="max-w-xl mx-auto py-9">
          <h1 className="py-3 text-3xl font-bold text-center">About Us</h1>
          <div className="text-3xl font-semibold text-center">
            <span className="relative inline-block p-1 mx-3 before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-yellow-400 before:shadow-xl before:shadow-yellow-500/75">
              <span className="relative">Banana Cupcake</span>
            </span>
          </div>

          <div className="text-center mt-9">
            <p>
              Welcome to Banana Cupcake, where passion meets pastry! Indulge in
              the extraordinary as we reimagine the classic cupcake with a
              banana-inspired twist. Our creations are a celebration of flavor,
              freshness, and fun. From the first moist bite to the last crumb,
              every Banana Cupcake experience is a journey into a world where
              sweetness meets sophistication. Join us in savoring the joy of
              life, one delicious cupcake at a time.
            </p>
          </div>

          <div className="flex py-4 mt-6 text-start">
            <div>
              <h1 className="py-4 text-lg font-bold">Company Vision:</h1>
              <p>
                At Banana Cupcake, our vision is to create a world where
                indulgence meets wholesomeness. We aspire to be the go-to
                destination for delightful banana-infused cupcakes, captivating
                taste buds with our unique twist on traditional flavors. Through
                our creations, we aim to spread joy, one perfectly moist and
                flavorful cupcake at a time.
              </p>
            </div>
            <div className="w-5 ml-10 bg-yellow-400 rounded-full"></div>
          </div>

          <div className="flex py-4 text-right">
            <div className="mr-10 bg-yellow-400 rounded-full w-7"></div>
            <div>
              <h1 className="py-4 text-lg font-bold">Company Mission:</h1>
              <p>
                Banana Cupcake is on a mission to redefine the dessert
                experience. We are committed to crafting cupcakes that not only
                tantalize the taste buds but also embody quality, creativity,
                and a touch of nostalgia. Our mission is to source the finest
                ingredients, infuse them with passion, and bake each cupcake to
                perfection, ensuring that every bite reflects our dedication to
                excellence.
              </p>
            </div>
          </div>

          <div className="py-6 text-2xl font-semibold text-center">
            <div className="h-1 my-5 rounded-full bg-gradient-to-r via-yellow-400"></div>
            <p>
              Discover the joy of
              <span className="relative inline-block mx-3 before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-yellow-400 before:shadow-lg before:shadow-yellow-500/75">
                <span className="relative font-normal">Banana Cupcake</span>
              </span>
              – where every bite is a celebration!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
