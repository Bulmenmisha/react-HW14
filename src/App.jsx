import { Provider } from 'react-redux';
import store from './redux/store.js';
import User from './User.jsx';
import UserForm from './UserForm.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="card">
          <User />
          <UserForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
