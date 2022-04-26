import { ClientInfo } from "../../client-information";
import img3 from '../../media/flatbed-onroad.jpg';
import img1 from '../../media/red-freightliner.jpg';
import img2 from '../../media/world-image.jpg';
import img4 from '../../media/logistics-tracking.png';
export const slideShowData = [ 
    { 
      img: img1, 
      title: `We're always at your Service`, 
      body: `Call ${ClientInfo.phone}`,
      linkPath: `/contact`,
      linkName: `CONTACT`

    }, 
    {
        img: img2,
        title: `Dedicated to Excellence`, 
        body: `Check out our Services`,
        linkPath: `/services`,
        linkName: `SERVICES`
    },
    {
      img: img3,
      title: `Delivering Success`, 
      body: `Top class service delivered over years`,
      linkPath: `/about`,
      linkName: `ABOUT`
    },
    {
      img: img4,
      title: `We're hiring`,
      body: `Apply today and get what you deserve`,
      linkPath: `/careers`,
      linkName: `CAREER`
    }
 ];
