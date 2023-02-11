import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from 'react-redux'
    
function App() {
  return (
    <div>
          {/* <h1 className='text-3xl font-bold'>Namaste React</h1> */}
          <Head />
          <Body />
          {/**
* Head
Body
    Sidebar
        Menu items
    Main Container
*
*
*
**/}
      </div>
      

  );
}



export default App;
