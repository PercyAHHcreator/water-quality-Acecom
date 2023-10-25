

import './App.css';
import { LeftColumn } from './components/LeftColumn';
import { MediumColumn } from './components/MediumColumn';
import { RightColumn } from './components/RightColumn';



function App() {


  return (
    <div>
      <header >
      <p className='logo'>Water Quality</p>
      

      <div className='icons'>
        <botton>Search</botton>
        <div>User</div>
      </div>
    </header>
    <div className='dashboard'>
      <LeftColumn/>
      <MediumColumn/>
      
      <RightColumn/>
    </div>
    </div>
  );
}

export default App;
