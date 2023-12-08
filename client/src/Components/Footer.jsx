// NOTE: To be used ONLY in client pages
import BakingBreadLogo from "/data/images/mainlogo.png";

function Footer() {
  return (
    <>
      <footer className="z-20 mt-auto bg-yellow-400 h-fit">
        <div className="text-white px-36 py-14">
          <div className="flex justify-between">
            <img
              src={BakingBreadLogo}
              className="w-16 h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
              alt="Banana Cupcake Logo"
            />
            <div className="flex gap-20">
              <ul>
                <li className="text-l font-bold">About Us</li>
                <li>About Banana Cupcake</li>
              </ul>
              <ul>
                <li className="text-l font-bold">Contact Us</li>
                <li>2022 @bananacupcake.com All rights reserved</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
