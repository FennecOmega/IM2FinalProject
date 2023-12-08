import "../../index.css";
import { Link } from "react-router-dom";
import bancup1 from "/data/images/bancup-1.jpg";
import bancup2 from "/data/images/bancup-2.jpg";
import bancup3 from "/data/images/bancup-3.jpg";

function Dashboard() {
  return (
    <>
      <div className="container p-8 mx-auto mt-8">
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to
            <span className="relative inline-block ml-3 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-emerald-500">
              <span className="relative text-white">Banana Cupcake</span>
            </span>
          </h1>
          <p className="text-emerald-700">
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
              <button className="w-full py-2 my-6 text-white shadow-xl bg-emerald-700 rounded-xl hover:bg-emerald-800">
                Get Started
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
