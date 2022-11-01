import './App.css';
import { useEffect } from 'react';
import BasicForm from './component/forms/basicForm';
import SignIn from './component/forms/signIn';
// import WebSocket from 'ws';
// import WebSocket from 'faye-websocket';

function App() {
  // "Hamiz", "hamiziscool"
  

  return (
  <>
  <div className='App'>
        <SignIn />
    </div>
  </>
  );
}

export default App;
