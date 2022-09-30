import React from 'react'

function Filter({frontend, backend, allDevs, handleFilter}) {
  return (
    <div className='input-container'>
        <h3 className='title'>SELECT DEVELOPERS FOR YOUR TEAM</h3>
        <div className='filter-container'>
            <input onChange={handleFilter} placeholder = 'Enter a name'/>
            <button onClick={allDevs}>All Devs</button>
            <button className='frontend-dev' onClick={frontend}>Frontend Devs</button>
            <button className='backend-dev'onClick={backend}>Backend Devs</button>
        </div>
    </div>
    
  )
}

export default Filter