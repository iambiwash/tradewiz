
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats'

function App() {
  return (
    <div className="App">
      {/* {Header} */}
      <div className = "app_header">
        <Header/>

      </div>



{/* ************************BODY STARTS HERE**************************************** */}

      {/* {Body} */}
      <div className="app_body">
        <div className='body_container'>
          <Newsfeed/>
          <Stats/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
