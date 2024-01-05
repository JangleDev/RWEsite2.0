import React from 'react'
import { TeamList } from '../helpers/TeamList'
import TeamMember from '../components/TeamMember'
import '../styles/menu.css'

function Team() {
  return (
    <div className = "Team">

      <h1>Executive Board</h1>
      <div className="TeamList">
        {TeamList[0].map((teamMember,key) =>{
          return (
            <TeamMember 
              key={key} 
              photo={teamMember.photo} 
              name ={teamMember.name} 
              role={teamMember.role}
            />
          );
        })}
      </div>

      <h1>Solar Drone Design Team</h1>
      <div className="TeamList">
        {TeamList[1].map((teamMember,key) =>{
          return (
            <TeamMember 
              key={key} 
              photo={teamMember.photo} 
              name ={teamMember.name} 
              role={teamMember.role}
            />
          );
        })}
      </div>  

      <h1>Business Board</h1>
      <div className="TeamList">
        {TeamList[2].map((teamMember,key) =>{
          return (
            <TeamMember 
              key={key} 
              photo={teamMember.photo} 
              name ={teamMember.name} 
              role={teamMember.role}
            />
          );
        })}
      </div>  
          
  </div>
  );
}

export default Team
