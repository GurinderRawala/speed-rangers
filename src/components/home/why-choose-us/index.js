import React from "react";
import { MdOutlineMobileFriendly } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { FaMap } from 'react-icons/fa';
import { Content } from "./content";
import IconWithDetail from "./icon-with-detail";
import SectionOne from "./section-one";
import StaticBackground from "./static-background";
const WhyChooseUs = () =>{
    return(
        <div style={{position: 'relative'}}>
            <StaticBackground img={Content.backgroundImage}/>
            <div className="row">
                <div className="col-sm-8" style={{padding: 0}}>
                    <SectionOne 
                        title={ <IconWithDetail 
                            icon={<MdOutlineMobileFriendly size={30}/>} 
                            detail={Content.sectionOne.heading} 
                        />
                        } 
                        data={Content.sectionOne}
                    />
                </div>
            </div>
            <div className="row flex-row-reverse">
                <div className="col-sm-8" style={{padding: 0}}>
                    <SectionOne 
                        title={ <IconWithDetail 
                            icon={<AiFillMessage size={30}/>} 
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