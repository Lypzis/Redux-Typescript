import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit}>
        <input
          type='text'
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && (
          <h3>
            {data.map(name => (
              <div key={name}>{name}</div>
            ))}
          </h3>
        )}
      </form>
    </div>
  );
};

export default RepositoriesList;
