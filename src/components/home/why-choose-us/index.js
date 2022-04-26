import React from "react";
import { BsHeadset } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa'
import { Content } from "./content";
import IconWithDetail from "./icon-with-detail";
import SectionOne from "./section-one";
import StaticBackground from "./static-background";
const WhyChooseUs = () =>{
    return(
        <div style={{position: 'relative'}}>
             <StaticBackground img={Content.backgroundImage}/>
            <div className="row">
                <div className="col-sm-6" style={{padding: 0}}>
                <SectionOne 
                    title={ <IconWithDetail 
                            icon={<BsHeadset size={30}/>} 
                            detail={Content.sectionOne.heading} 
                            />
                        } 
                    data={Content.sectionOne}
                    />
                </div>
            </div>
            <div className="row flex-row-reverse">
                <div className="col-sm-6">
                <SectionOne 
                    title={ <IconWithDetail 
                            icon={<FaTruck size={30}/>} 
                            detail={Content.sectionTwo.heading} 
                            />
                        } 
                    data={Content.sectionTwo}
                    />
                </div>
            </div>
        </div>
    )
}
export default WhyChooseUs