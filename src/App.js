import Routes from './routes/Routes'

import './styles/global.css'

import UserProvider from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}

export default App;
