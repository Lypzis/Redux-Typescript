import RepositoriesList from './RepositoriesList';

import { Provider } from 'react-redux';
import { store } from '../state';

function App() {
  return (
    <Provider store={store}>
      <div className='card'>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
