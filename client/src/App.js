import './App.css';
import {useState} from 'react';
import Button from './components/Button';
import Header from './components/header';

function App() {

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  
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
            <Button text="Add a Record"/>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th id="top">Title</th>
                    <th id="top">Artist</th>
                    <th id="top"> </th>
                </tr>
            </thead>
            <tbody id="record-list">

            </tbody>
        </table>
       </div>

    </div>
  )
};

export default App;
