import React from 'react'
import { TeamList } from '../helpers/TeamList'
import TeamMember from '../components/TeamMember'
import '../styles/menu.css'

function Team() {
  return (
    <div className = "Team">
      <div className="TeamHeader">
        <h1>Meet the team working to provide students with an opportunity to gain engineering experience 
          within the collaborative space being fostered at RWE.
        </h1>
      </div>
      <div className="TeamList">
        {TeamList.map((teamMember,key) =>{
          const linkedinLink = teamMember.link;
          return (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <TeamMember 
                key={key} 
                photo={teamMember.photo} 
                name ={teamMember.name} 
                role={teamMember.role}
              />
            </a>  
          );
        })}
      </div>

          
  </div>
  );
}

export default Team
