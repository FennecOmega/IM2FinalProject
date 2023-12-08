import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ViewProfile() {
  const { user } = useAuthContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loader = async () => {
      console.log(user);
      if (user === null) {
        navigate("/about-us");
      }
    };

    loader();
  }, [user, navigate]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="">
          <div className="flex">
            <h1 className="mb-3 text-2xl font-bold">Your Profile</h1>
            {/* Edit Button Logo, when clicked <p> will become <input>??? */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pb-2 ml-3 cursor-pointer icon icon-tabler icon-tabler-edit"
              width="30"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
          </div>
          <form action="" className="w-81">
            <div className="flex flex-col py-1">
              <label className="py-1 font-bold" htmlFor="">
                Name
              </label>
              <p className="w-full px-2 py-1 text-gray-800 rounded-md bg-neutral-200">
                Test name
              </p>
              {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="text" name="" id="" /> */}
            </div>
            <div className="flex flex-col py-1">
              <label className="py-1 font-bold" htmlFor="">
                Email
              </label>
              <p className="w-full px-2 py-1 text-gray-800 rounded-md bg-neutral-200">
                Test email
              </p>
              {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="text" name="" id="" /> */}
            </div>
            <div className="flex flex-col py-1">
              <label className="py-1 font-bold" htmlFor="">
                Address
              </label>
              <p className="w-full px-2 py-1 text-gray-800 rounded-md bg-neutral-200">
                Test address
              </p>
              {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
            </div>
            <div className="flex flex-col py-1">
              <label className="py-1 font-bold" htmlFor="">
                Contact Number
              </label>
              <p className="w-full px-2 py-1 text-gray-800 rounded-md bg-neutral-200">
                Test contNum
              </p>
              {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
            </div>
            <div className="flex flex-col py-1">
              <label className="py-1 font-bold" htmlFor="">
                Birthday
              </label>
              <p className="w-full px-2 py-1 text-gray-800 rounded-md bg-neutral-200">
                December 5, 2000
              </p>
              {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
            </div>
            <div className="grid grid-rows-2 gap-2 my-2 text-white md:grid-cols-2">
              <button className="py-2 bg-green-600 rounded-md">
                Change Password
              </button>
              <button className="py-2 bg-red-700 rounded-md">
                Delete Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
