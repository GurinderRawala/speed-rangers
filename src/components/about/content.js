/* eslint-disable react/react-in-jsx-scope */
import speedRangerTrailer from '../../media/rangers-trailer.jpeg'
import { FaTruck, FaTemperatureLow, FaTrailer, FaBox, FaUserAlt } from 'react-icons/fa'
import { BsHeadset } from 'react-icons/bs'
export const Content = {
    sectionOne: {
        headingImg: `https://th.bing.com/th/id/R.5b7feac6772ffebe7c099abfdb406b38?rik=H4BECRqa9Y9JQQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2fe%2f8%2f699903-flame-backgrounds-3008x2000-4k.jpg&ehk=JMKEpR0fDJXfsqbu%2bbsOOmxKmf3gZB0xXUev3NBAyrQ%3d&risl=&pid=ImgRaw&r=0`,
        paragraphOne: `Speed Rangers Inc. was founded in 2018 with a vision to create a 
        difference in the carrier market. Our founder Arvinder Powar, being in the industry 
        for over 5+ years has experience in both sales and technical aspects of trucking. 
        With his clear vision of taking company to an exceptional stage in customer service, 
        expedite shipment deliveries and customer 
        satisfaction, we are ready to give our "excellent approach in every Load."`,
        paragraphTwo: `We value our customers, here at Speed Rangers, 
        we make it sure to deliver every load with perfection and punctuality. 
        We are specialized in hauling temperature controlled and dry loads. 
        Our vision is to establish our name in North American trucking industry, 
        and we are working hard for it. Speed Rangers Inc. is aways open for business. 
        We guarantee to provide exceptional  
        service with our brand new equipment and best professional drivers. `,
        img: `https://th.bing.com/th/id/OIP.QJwE-uO0B0ZJ5EoywF2sIgHaJl?pid=ImgDet&rs=1`,
        heading: 'ABOUT RANGERS'
    },
    services: [
        {name: 'Truckload', icon: <FaTruck size={35} />}, 
        {name: 'Expedite Service', icon: <FaTrailer size={35} />}, 
        {name: 'Temperature Controlled', icon: <FaTemperatureLow size={35} />},
        {name: 'LTL services', icon: <FaBox size={35} /> },
        {name: '24/7 Dispatch Management', icon: <BsHeadset size={35} />},
        {name: 'Excellent Customer Service', icon: <FaUserAlt size={35} />}
    ],
    trailer: speedRangerTrailer,

}