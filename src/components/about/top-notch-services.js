import React from "react";
const TopNotchServices = ({img, title, services}) =>{
    return(
        <div className="my-3 App-header" style={{minHeight: 650}}>
            <div style={{width: '100%'}}>
                <div className="row justify-content-center">
                    <div data-aos="fade-right" className="col-sm-4 my-container text-center" 
                        style={{padding: 25}}>
                        <div className="app-heading" style={{backgroundImage: `url('${img}')`}}>{title}</div>
                        <hr />
                        <ul className="list-group">
                            {
                                services.map((item, i) => <li key={i} className="list-group-item">
                                    {item.icon}<br/>{item.name}</li>)
                            }
                        </ul>
                    </div>
                    <div data-aos="flip-up" className="col-sm-6 bg-dark pt-5 text-white" style={{position: 'relative'}}>
                        <p style={{padding: 25}}>Our experienced company makes sure that 
                        all your loads are at the right place, at the right time, for the best price.
                        We provide same day services and cover your last minute loads so that your target is met.
                        </p>
                        <p style={{padding: 25}}>At Speed Rangers Inc., we are committed to providing our clients around the world with reliable, flexible pick up and/or drop off solutions based on expertise that we have gained from over half a century of experience and deliveries. We cultivate long-term partnerships with our customers to delivering a range of 
                        services adapted to meet their specific needs with the Speed Rangers Inc. seal of quality</p>
                        <img src={img} alt="trailer" className="img-fluid" style={{marginTop: 25}}/>
                        <div className="shade"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNotchServices