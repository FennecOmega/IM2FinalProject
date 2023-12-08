import "../../index.css";
import { Link } from "react-router-dom";
import bancup1 from "/data/images/bancup-1.jpg"
import bancup2 from "/data/images/bancup-2.jpg"
import bancup3 from "/data/images/bancup-3.jpg"

function Dashboard() {
  return (
    <>
        <div class="container mx-auto mt-8 p-8">
    <section class="text-center">
      <h1 class="mb-4 text-4xl font-bold">
        Welcome to
        <span class="relative ml-3 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-emerald-500">
          <span class="relative text-white">Banana Cupcake</span>
        </span>
      </h1>
      <p class="text-emerald-700">Delicious Cupcakes For You and Your Family</p>
    </section>
    <section class="mt-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img className="rounded-2xl w-full h-60 object-cover transition ease-in-out duration-500 hover:scale-105" src={bancup1} alt="" />
        </div>
        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img className="rounded-2xl w-full h-60 object-cover transition ease-in-out duration-500 hover:scale-105" src={bancup2} alt="" />
        </div>
        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img className="rounded-2xl w-full h-60 object-cover transition ease-in-out duration-500 hover:scale-105" src={bancup3} alt="" />
        </div>
      </div>
      <div className="w-32 mx-auto">
        <Link to="/signup-page"><button className="w-full py-2 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 shadow-xl my-6">Get Started</button></Link>
      </div>
    </section>
  </div>

    </>
  );
}

export default Dashboard;
