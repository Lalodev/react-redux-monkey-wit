import Navbar from './components/Navbar';
import UserList from './components/UserList';
//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <UserList />
      </Provider>
    </div>
  );
}

export default App;
