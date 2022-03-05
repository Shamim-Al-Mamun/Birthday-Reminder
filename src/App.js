import React, { useEffect, useState } from 'react'

import Data from './Data'
import List from './List'
import NewData from './NewData'
import TimeStamp from './util/TimeStamp'

function App() {
  const [people, setPeople] = useState(Data);
  const [newEntry, setNewEntry] =useState();
  const [addClikced, setAddClikced] = useState(false);
  const [peopeleAdded, setpeopleAdded] =useState(false);

  const {day, date, month, year} = TimeStamp();
  const getNewData =(NewData) =>{setNewEntry(NewData);}
  
useEffect(()=>{
  if(newEntry){
    setPeople([...people,newEntry]);
  }
},[newEntry])

  return (
    <main>
      <section className='container'>
        <div>{day}, {date} {month} {year}</div>
        <h3>{people.length}  Birthdays Today</h3>
        <List people={people} />
        {addClikced && peopeleAdded && <NewData onChildData ={getNewData} setAddClikced={setAddClikced} setpeopleAdded ={setpeopleAdded}/>}
        {!addClikced &&  <button onClick={() => setPeople([])}>clear all</button>}
        {! addClikced && <button onClick={()=> {setAddClikced(true); setpeopleAdded(true)}}>add new</button>}
      </section>
    </main>
  )
}

export default App;