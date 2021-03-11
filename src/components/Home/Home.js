import React, { useEffect, useState } from 'react';
import './Home.css'
import HomeSection from '../HomeSection/HomeSection';
import Banner from '../Banner/Banner';


const Home = () => {
    
    const [teams, setTeams] = useState([])
    
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    return (
        <>
            {/* home page banner */}
            <Banner></Banner>
        
            <div className="homeContainer">
                <div className="homeCart">
                {
                    teams.map(team => <HomeSection team={team}></HomeSection>)
                }            
                </div>
            </div>
        </>
    );
};

export default Home;