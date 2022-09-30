import React, {useState} from 'react';
import './App.css';
import data from './Data'
import Filter from './Filter'
import Team from './Team'

function App() {

  const [allNames, setAllNames] = useState(data)
  const [myTeam, setMyTeam] = useState([])

  const handleFilter = (e) => {
    let filtered = data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setAllNames(filtered)
  }

  const frontend = () => {
    let frontendNames = data.filter(item=>item.speciality === 'frontend')
    setAllNames(frontendNames)
  }

  const backend = () => {
    let backendNames = data.filter(item=>item.speciality === 'backend')
    setAllNames(backendNames)
  }

  const allDevs = () => {
    setAllNames(data)
  }

  const addMembers = (dev) => {
    let found = myTeam.some(item=>item.id === dev.id)
    if (myTeam.length===6){
      alert('Too many members')
    } else if (!found){
    setMyTeam([...myTeam,dev])
    let newList = allNames.filter(item=>item.id !== dev.id)
    setAllNames(newList)
    }

  }

  const removeMember = (dev) =>{
    let remove = myTeam.filter(item=>item.id !== dev.id)
    setMyTeam(remove)
    setAllNames([dev,...allNames])
  }

  return (
    <div>
      <Filter frontend={frontend} backend={backend} allDevs={allDevs} handleFilter={handleFilter}/>
      <Team myTeam = {myTeam} removeMember = {removeMember}/>
      <div className='names-container'>
        {
          allNames.map(item=>{
            return <button className={item.speciality==='frontend' ? 'frontend-dev' : 'backend-dev'} onClick={()=>addMembers(item)}>{item.name}</button>
          })
        }
      </div>

    </div>
  );
}

export default App;
