import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="container">
        <i className="logo fa-solid fa-record-vinyl"></i>
        <h1 className="title">My<span className="text-primary">Vinyl</span>Stash</h1>
      </div>
      <div className="container-form">
        <form id="vinyl-form">
            <div className="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control"/>
            </div>
            <div className="form-group">
                <label for="Artist">Artist</label>
                <input type="text" id="artist" class="form-control"/>
            </div>
            <input type="submit" value="Add Record" className="button"/>
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
