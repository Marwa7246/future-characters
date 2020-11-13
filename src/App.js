import Fuse from 'fuse.js'
import logo from './logo.svg';
import './App.css';
import characters from './characters.json'

function App() {
  console.log(Fuse)
  return (
    <div >
      <header className="App-header">
      <div className="container">
          <h1>Futurama Characters</h1>
      </div>
      </header>

      <main className="container">
        <ul className="characters">
          {characters.map(character=>{
            const {name, company, species, thumb} = character;
            console.log(thumb)
            return(
              <li key={name} className="character">
                <span className="character-thumb"
                style={{backgroundImage: `url(${thumb})`
              }}/>
              <ul className="character-meta">
                <li>
                  <strong>Name</strong>: {name}
                </li>
                <li>
                  <strong>Company</strong>: {company}
                </li>
                <li>
                  <strong>Species</strong>: {species}
                </li>
              </ul>
              </li>
            )
          })}
        </ul>
        <aside>
          <form className="search">
            <label>Search</label>
            <input type="text"/>
          </form>

        </aside>

      </main>
      <footer>
        <p>
          Images from <a href="http://www.cc.com/shows/futurama">Futurama</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
