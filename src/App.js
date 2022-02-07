import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <div className='Title'> 
        <h1>Hello this is working</h1>
      </div>
      <div className='Gameboard'>
        <Cards></Cards>
      </div>
    </div>
  )
}

export default App;
