import "../../index.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div class="p-6 sm:p-10 space-y-6 ml-40">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div class="mr-6">
            <h1 class="text-4xl font-semibold mb-2">Welcome back, Employee</h1>
            <h2 class="text-gray-600 ml-0.5">
              Banana Cupcake Employee Dashboard
            </h2>
          </div>
        </div>

        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div>
              <span class="block text-2xl font-bold">10</span>
              <span class="block text-gray-500">Orders this month</span>
            </div>
          </div>

          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div>
              <span class="block text-2xl font-bold">21</span>
              <span class="block text-gray-500">Completed Orders</span>
            </div>
          </div>

          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div>
              <span class="inline-block text-2xl font-bold">9</span>
              <span class="block text-gray-500">Pending Orders</span>
            </div>
          </div>

          <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div>
              <span class="block text-2xl font-bold">5</span>
              <span class="block text-gray-500">Cancelled Orders</span>
            </div>
          </div>
        </section>

        <section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-100">
              Supplier and Staff Team Information
            </div>
            <div class="p-4 flex-grow">
              <div className="flex items-center pt-2">
                <img
                  src="https://cdn.discordapp.com/embed/avatars/1.png"
                  class="cursor-pointer w-10 h-10 rounded-3xl mr-3 mt-2"
                />
                <span class="block text-2xl font-bold">
                  Philip Isidro Joseph Go
                </span>
              </div>
              <span class="block text-gray-500 pl-10 ml-3">Staff</span>

              <div className="flex items-center pt-2">
                <img
                  src="https://cdn.discordapp.com/embed/avatars/3.png"
                  class="cursor-pointer w-10 h-10 rounded-3xl mr-3 mt-2"
                />
                <span class="block text-2xl font-bold">
                  Kenneth John Lao Cantillas
                </span>
              </div>
              <span class="block text-gray-500 pl-10 ml-3">Staff</span>

              <div className="flex items-center pt-2">
                <img
                  src="https://cdn.discordapp.com/embed/avatars/2.png"
                  class="cursor-pointer w-10 h-10 rounded-3xl mr-3 mt-2"
                />
                <span class="block text-2xl font-bold">
                  Matthea Trina Ornopia Borromeo
                </span>
              </div>
              <span class="block text-gray-500 pl-10 ml-3">Supplier</span>

              <div className="flex items-center pt-2">
                <img
                  src="https://cdn.discordapp.com/embed/avatars/4.png"
                  class="cursor-pointer w-10 h-10 rounded-3xl mr-3 mt-2"
                />
                <span class="block text-2xl font-bold">Von Manginsay</span>
              </div>
              <span class="block text-gray-500 pl-10 ml-3">Supplier</span>
            </div>
          </div>

          <div class="flex flex-col row-span-2 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-100">
              Sales month by month
            </div>
            <div class="p-4 flex-grow">
              <div className="flex items-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-peso"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
                  <path d="M18 8h-12" />
                  <path d="M18 11h-12" />
                </svg>
                <span class="block text-2xl font-bold">988</span>
              </div>
              <span class="block text-gray-500">June</span>

              <div className="flex items-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-peso"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
                  <path d="M18 8h-12" />
                  <path d="M18 11h-12" />
                </svg>
                <span class="block text-2xl font-bold">699</span>
              </div>
              <span class="block text-gray-500">July</span>

              <div className="flex items-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-peso"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
                  <path d="M18 8h-12" />
                  <path d="M18 11h-12" />
                </svg>
                <span class="block text-2xl font-bold">858</span>
              </div>
              <span class="block text-gray-500">August</span>

              <div className="flex items-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-peso"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
                  <path d="M18 8h-12" />
                  <path d="M18 11h-12" />
                </svg>
                <span class="block text-2xl font-bold">1021</span>
              </div>
              <span class="block text-gray-500">September</span>
            </div>
          </div>

          <div class="flex flex-col row-span-2 bg-white shadow rounded-lg">
            <div class="px-6 py-5 font-semibold border-b border-gray-100">
              Expenses on inventory
            </div>
            <div class="p-4 flex-grow">
              <div className="flex items-center pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-peso"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
                  <path d="M18 8h-12" />
                  <path d="M18 11h-12" />
                </svg>
                <span class="block text-2xl font-bold">1234</span>
              </div>
              <span class="block text-gray-500">Expenses this month</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
