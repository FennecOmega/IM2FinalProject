import "../../index.css";
import bancupcaramel from "/data/images/bancup-caramel.jpg";
import bancupchoco from "/data/images/bancup-choco.jpg";
import bancuplemon from "/data/images/bancup-lemon.jpg";
import bancuppeanut from "/data/images/bancup-peanutbutter.jpg";
import bancupstrawberry from "/data/images/bancup-strawberry.jpg";
import bancupvanilla from "/data/images/bancup-vanilla.jpg";
import { Link } from "react-router-dom";
function ProductDisplay() {
  return (
    <>
      <div className="max-w-4xl px-8 mx-auto py-8 my-8">
        <h1 className="py-4 text-3xl font-semibold text-center">
          Our Products
        </h1>

        {/* Adjust the grid. Kung 1 product i change lang og grid-cols-1 thanks */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {/* Cards */}
          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancupcaramel}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center pt-2 text-neutral-500">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-peso" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
          <path d="M18 8h-12" />
          <path d="M18 11h-12" />
        </svg>
        <p className="font-medium text-md">120</p> */}
            </div>
            <div className="flex items-center justify-center text-emerald-800">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-model" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 8h8v8h-8z" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M16 16l3.3 3.3" />
          <path d="M16 8l3.3 -3.3" />
          <path d="M8 8l-3.3 -3.3" />
          <path d="M8 16l-3.3 3.3" />
        </svg> */}
              <p className="font-medium line-clamp-1">Caramel Banana Cupcake</p>
            </div>
            {/* <button className="w-full px-3 py-1 my-3 text-sm text-white bg-teal-900 rounded-md shadow-lg hover:bg-teal-800">View Product</button> */}
          </div>

          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancupchoco}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center pt-2 text-neutral-500"></div>

            <div className="flex items-center justify-center text-emerald-800">
              <p className="font-medium line-clamp-1">
                Chocolate Banana Cupcake
              </p>
            </div>
          </div>

          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancuplemon}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center pt-2 text-neutral-500"></div>

            <div className="flex items-center justify-center text-emerald-800">
              <p className="font-medium line-clamp-1">Lemon Banana Cupcake</p>
            </div>
          </div>

          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancuppeanut}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center pt-2 text-neutral-500"></div>

            <div className="flex items-center justify-center text-emerald-800">
              <p className="font-medium line-clamp-1">
                Peanut Butter Banana Cupcake
              </p>
            </div>
          </div>

          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancupstrawberry}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center pt-2 text-neutral-500"></div>

            <div className="flex items-center justify-center text-emerald-800">
              <p className="font-medium line-clamp-1">
                Strawberry Banana Cupcake
              </p>
            </div>
          </div>

          <div className="flex flex-col my-3">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <Link to="/order-form">
                <img
                  className="object-cover w-full transition duration-500 ease-in-out h-60 rounded-2xl hover:scale-105"
                  src={bancupvanilla}
                  alt=""
                />
              </Link>
            </div>

            <div className="flex items-center pt-2 text-neutral-500"></div>

            <div className="flex items-center justify-center text-emerald-800">
              <p className="font-medium line-clamp-1">
                Vanilla Bean Banana Cupcake
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
