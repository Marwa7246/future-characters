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
      <main className="container">
        <ul className="characters">
          {characters.map(character=>{
            const {name, company, species, thumb} = character;
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

      </main>
      </header>
    </div>
  );
}

export default App;
