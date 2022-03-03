import './App.css';
import Back from './back/Back';
import Content from './content/Content';
import Product from './products/Product';
import Topbar from './topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Back  />
      <Content />
      <Product />
    </div>
  );
}

export default App;
