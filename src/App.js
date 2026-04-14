
import './App.css';
import Guest from './Guest';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Guest name="Alice" room="Deluxe Suite" />
      <Guest name="Bob" />
      <Guest />
      <Profile props={{name: "Charlie", age: 30, location: "New York"}} />          
    </div>
  );
}

export default App;
