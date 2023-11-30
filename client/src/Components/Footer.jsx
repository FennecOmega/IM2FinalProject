// NOTE: To be used ONLY in client pages
import BakingBreadLogo from '/data/images/Breaking_Bad_logo.png'

function Footer(){

    return (
   <>
    <footer class="h-fit bg-green-700">
    <div class="px-36 py-14 text-white">
      <div class="flex justify-between">
      <img src={BakingBreadLogo} className="h-12" alt="Baking Bread Logo"/>
        <div class="flex gap-20">
          <ul>
            <li class="font-bold">About Us</li>
            <li>About BakingBread</li>
          </ul>
          <ul>
            <li class="font-bold">Contact Us</li>
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