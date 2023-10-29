import './App.css'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {

  const clientId = "936206856315-bs1bs0cmteclhoka71o0djsg13li6tqp.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App
