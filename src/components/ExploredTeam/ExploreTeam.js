import React from 'react';
import './ExploredTeam.css'
import male from '../../images/male.png'
import female from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faCheckCircle,
    faFlag,
    faFutbol,
    faVenusMars,
} from '@fortawesome/free-solid-svg-icons'
import Twitter from '../../images/Twitter.png'
import Facebook from '../../images/Facebook.png'
import glob from '../../images/glob.svg'

const ExploreTeam = (props) =>{

    const { strTeam, strTeamBanner, strTeamBadge,
            intFormedYear, strCountry, strSport, strGender,
            strStadiumDescription, strDescriptionEN, strFacebook,
            strTwitter, strWebsite } = props.team  //   team has been received from teamDetails component
    
    let miniBanner;
    if(strGender === "Male"){
        miniBanner = <img className="genderImg img-fluid" src={male} alt=""/>
    }else{
        miniBanner = <img className="genderImg img-fluid" src={female} alt=""/>
    }

    return (
        <div>
            {/* details banner */}
            <div className="exploreBanner mb-5">
                {/* team badge */}
                <div className="teamBadge">
                    <img src={strTeamBadge} alt=""/>
                </div>
                {/* banner img */}
                <img src={strTeamBanner} alt="" />
            </div>

            {/* team details */}
            <div className="container m-auto">
                <div className="teamDetails row m-auto">
                    <div className="teamContent col-md-4 text-md-left text-center col-sm-12">
                        <h4>{strTeam}</h4>
                        <p>
                            <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "8px" }} />
                            Founded: {intFormedYear}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faFlag} style={{ marginRight: "8px" }} />
                            Country: {strCountry}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faFutbol} style={{ marginRight: "8px" }} />
                            Sport: {strSport}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faVenusMars} style={{ marginRight: "8px" }} />
                            Gender: {strGender}
                        </p>
                    </div>
                    {/* mini banner */}
                    <div className="teamImg col-md-4 col-sm-12">
                        {miniBanner}
                    </div>
                </div>  
            </div>

            {/* team description */}
            <div className="container mt-5 pr-5 text-justify pl-5">
                <h3>About Club</h3>
                <p>{strDescriptionEN}</p>
            </div>
            <div className="container mt-5 pr-5 text-justify pl-5">
                <h3>About Stadium</h3>
                <p>{strStadiumDescription}</p>
            </div>
            
            {/* team social media link */}
            <div className="socialIcon mt-5 mb-5">
                <a target="blank" href={"https://" + strTwitter}><img  style={{ width: "50px" }} src={Twitter} alt="" /></a>
                <a target="blank" href={"https://" + strFacebook}><img  style={{ width: "50px" }} src={Facebook} alt="" /></a>
                <a target="blank" href={"https://" + strWebsite}><img style={{ width: "40px" }} src={glob} alt="" /></a>
            </div>
            
        </div>
            
        
    );
};

export default ExploreTeam;