import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetchDataFromEndpoint from './services/apiHelper';
import { API_ENDPOINTS } from './services/api';

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        setLoading(true);
        const languagesData = await fetchDataFromEndpoint(API_ENDPOINTS.LANGUAGES);
        setLanguages(languagesData);
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);
  
  return (
    <div className="App" style={{paddingTop: '55px', minHeight: 'calc(100vh - 55px)', backgroundColor: 'black'}}>
      {loading && <div>Loading...</div>}
      <div style={{margin: '0px 70px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {languages && 
          languages.map((language) => 
            <div style={{ width: '25%'}}>
              <div style={{backgroundColor: 'grey', margin: '8px'}}>
                <span style={{padding: '8px', color: 'white'}}>{language.name}</span>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;
