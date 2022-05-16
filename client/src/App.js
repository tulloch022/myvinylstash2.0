import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Header from './components/header';
import Records from './components/records';

function App() {
  const [records, setRecords] = useState([
    {
        id: 1,
        title: 'A Moment Apart',
        artist: 'Odesza'
    },
    {
        id: 2,
        title: 'Everyday',
        artist: 'Dave Matthews Band'
    },
    {
        id: 3,
        title: 'Continuum',
        artist: 'John Mayer'
    }
])


//Remove record

  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id))
  }



  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  
  const onClick = (e) => {
    alert(e);
  }
  
  return (
    <div className="App">
      
      <div className="container">
        <Header text="MyVinylStash"/>
      </div>
      <div className="container-form">
        <form id="vinyl-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  className="form-control" 
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }}/>
            </div>
            <div className="form-group">
                <label htmlFor="Artist">Artist</label>
                <input 
                  type="text" 
                  id="artist" 
                  className="form-control"
                  onChange={(event) => {
                    setArtist(event.target.value)
                  }}/>
            </div>
            <Button onClick={onClick} text="Add a Record"/>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th id="top">Title</th>
                    <th id="top">Artist</th>
                </tr>
            </thead>
        </table>
        <Records records={records} onRemove={removeRecord}/>
       </div>

    </div>
  )
};

export default App;
