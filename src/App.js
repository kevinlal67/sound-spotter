import './App.css';
import Login from './components/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';

function App() {
  const clientId="728467100170-ms1oqpurls2p9kpbtt9seo9rjolk8929.apps.googleusercontent.com"

  return (
    <div className="App">
    <GoogleOAuthProvider clientId={clientId}>
      <Login />  
    </GoogleOAuthProvider>      
    </div>
  );
}

export default App;
