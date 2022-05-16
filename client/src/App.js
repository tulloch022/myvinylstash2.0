import './App.css';

function App() {
  return (
    <div className="App">
      
      <div class="container">
        <i class="logo fa-solid fa-record-vinyl"></i>
        <h1 class="title">My<span class="text-primary">Vinyl</span>Stash</h1>
    </div>
    <div class="container-form">
        <form id="vinyl-form">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control"/>
            </div>
            <div class="form-group">
                <label for="Artist">Artist</label>
                <input type="text" id="artist" class="form-control"/>
            </div>
            <input type="submit" value="Add Record" class="button"/>
        </form>
        <table class="table">
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
  );
}

export default App;
