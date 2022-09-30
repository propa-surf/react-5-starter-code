import React from 'react'

function Team({myTeam, removeMember}) {
  return (
    <div className='myteam-container'>
        {
            myTeam.map(item=>{
                return <button className={item.speciality==='frontend' ? 'frontend-dev' : 'backend-dev'} onClick={()=>{removeMember(item)}}>{item.name}</button>
            }
            )
        }
    </div>
  )
}

export default Team