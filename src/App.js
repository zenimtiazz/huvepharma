import './App.css';
import Back from './back/Back';
import Content from './content/Content';
import Topbar from './topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Back  />
      <Content />
    </div>
  );
}

export default App;
