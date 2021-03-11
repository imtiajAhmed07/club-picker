import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExploreTeam from '../ExploredTeam/ExploreTeam';

const TeamDetails = () =>{
    
    const { teamId } = useParams()
    const [team, setTeam] = useState([])

    useEffect(() =>
    {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [teamId])

    return (
        <div> 
            {
                team.map(team => <ExploreTeam team={team} ></ExploreTeam>)
            }
        </div>
    );
};

export default TeamDetails;