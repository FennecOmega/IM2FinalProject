// NOTE: To be used ONLY in client pages
import BakingBreadLogo from '/data/images/Breaking_Bad_logo.png'

function Footer(){

    return (
   <>
    <footer className="h-fit bg-green-700 static w-screen z-20 bottom-0 start-0">
    <div className="px-36 py-14 text-white">
      <div className="flex justify-between">
      <img src={BakingBreadLogo} className="h-12" alt="Baking Bread Logo"/>
        <div className="flex gap-20">
          <ul>
            <li className="font-bold">About Us</li>
            <li>About BakingBread</li>
          </ul>
          <ul>
            <li className="font-bold">Contact Us</li>
            <li>2022 @bakingbread.com All rights reserved</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
   </>
 )
}

export default Footer;