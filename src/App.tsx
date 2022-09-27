import axios from 'axios';
import { useEffect, useState } from 'react';
import { Accounts, AccountsTypes } from './types';
import { baseUrl } from './requestMethods';
import loadingImage from './images/preloader.gif';
import Table from './components/Table';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Accounts[]>([]);
  const [accountTypesData, setAccountsTypesData] = useState<AccountsTypes[]>(
    []
  );
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);

    const requestOne = baseUrl('accounts');
    const requestTwo = baseUrl('accounttypes');

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setData(responseOne.data);
          setAccountsTypesData(responseTwo.data);
          setIsLoading(false);
        })
      )
      .catch((error) => {
        if (error instanceof Error) {
          return setError(error.message);
        } else {
          throw error;
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <h1>Oops, something went wrong = {error}</h1>;
  }

  return (
    <main className="page">
      {isLoading ? (
        <div className="loading">
          <img className="loading-img" src={loadingImage} alt="loading" />
          <h4>Loading, please wait...</h4>
        </div>
      ) : (
        <Table data={data} dataTypes={accountTypesData} />
      )}
    </main>
  );
};

export default App;
