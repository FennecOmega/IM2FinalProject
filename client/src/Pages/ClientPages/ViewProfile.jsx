import { Link } from "react-router-dom";

function ViewProfile(){

    return(
        <>
        <div class="flex items-center justify-center">
            <div class="">
                <div class="flex">
                    <h1 class="mb-3 text-2xl font-bold">Your Profile</h1>
                    {/* Edit Button Logo, when clicked <p> will become <input>??? */}
                    <svg xmlns="http://www.w3.org/2000/svg" class=" ml-3 pb-2 icon icon-tabler icon-tabler-edit cursor-pointer" width="30" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                    </svg>
                </div>
                <form action="" class="w-81">
                <div class="flex flex-col py-1">
                    <label class="py-1 font-bold" for="">Name</label>
                    <p class="w-full rounded-md bg-neutral-200 py-1 px-2 text-gray-800">Test name</p>
                    {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="text" name="" id="" /> */}
                </div>
                <div class="flex flex-col py-1">
                    <label class="py-1 font-bold" for="">Email</label>
                    <p class="w-full rounded-md bg-neutral-200 py-1 px-2 text-gray-800">Test email</p>
                    {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="text" name="" id="" /> */}
                </div>
                <div class="flex flex-col py-1">
                    <label class="py-1 font-bold" for="">Address</label>
                    <p class="w-full rounded-md bg-neutral-200 py-1 px-2 text-gray-800">Test address</p>
                    {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
                </div>
                <div class="flex flex-col py-1">
                    <label class="py-1 font-bold" for="">Contact Number</label>
                    <p class="w-full rounded-md bg-neutral-200 py-1 px-2 text-gray-800">Test contNum</p>
                    {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
                </div>
                <div class="flex flex-col py-1">
                    <label class="py-1 font-bold" for="">Birthday</label>
                    <p class="w-full rounded-md bg-neutral-200 py-1 px-2 text-gray-800">December 5, 2000</p>
                    {/* <input class="w-full rounded-md bg-neutral-200 py-1 px-2" type="email" name="" id="" /> */}
                </div>
                <div class="my-2 grid md:grid-cols-2 grid-rows-2 gap-2 text-white">
                    <button class="rounded-md bg-green-600 py-2">Change Password</button>
                    <button class="rounded-md bg-red-700 py-2">Delete Profile</button>
                </div>
                </form>
            </div>
        </div>

        </>
    );
}

export default ViewProfile;
