import React from 'react'
import '../styles/TeamMember.css'

function TeamMember({name, role, photo}) {
  return (
    <div className='TeamMember'>
      <img src={photo} alt={name}/>
      <div className='MemberDescriptor'>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      
    </div>
  )
}

export default TeamMember
