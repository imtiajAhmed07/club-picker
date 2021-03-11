import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const HomeSection = (props) => {
    
    const { idTeam, strTeamBadge, strTeam, strSport } = props.team;   // team has been received from home component
    
    return (
        <div className="homeSectionContainer">
            
            <img src={strTeamBadge} alt="" />
            <h3> {strTeam} </h3>
            <p>Sports type: {strSport}</p>

            <Link to={"/team/details/"+idTeam}>
                <button className="btn btn-sm pr-3 pl-3" style={{ backgroundColor: "#7952b3", color: "white" }}>
                    Explore
                    <FontAwesomeIcon icon={faLongArrowAltRight} style={{ marginLeft: "8px" }} />
                </button>
            </Link>
        </div>
    );
};

export default HomeSection;