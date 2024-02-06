import { useEffect, useState } from 'react';
import fetchDataFromEndpoint from '../../services/apiHelper';
import { API_ENDPOINTS } from '../../services/api';

const LanguagesPage = () => {
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
    <div className="App" style={{ paddingTop: '55px', minHeight: 'calc(100vh - 55px)', backgroundColor: 'black' }}>
      <div>
        <div style={{ width: '100%', height: '400px', backgroundImage: 'url("/images/computer.jpg")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '32px 64px' }}>
          {languages.length ?
            languages.map((language) =>
              <div style={{ width: '25%' }}>
                <div style={{ backgroundColor: '#161616', padding: '8px 8px 16px 8px', margin: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ color: 'white', fontSize: '32px', fontWeight: '600' }}>{language.name}</span>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <span style={{ color: 'white' }}>
                      50+ interview questions
                    </span>
                  </div>
                  <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ backgroundColor: '#535353', margin: '0px', borderRadius: '4px', padding: '2px 4px' }}>
                      <span style={{ color: 'white' }}>frontend</span>
                    </div>
                    <div style={{ backgroundColor: '#535353', margin: '0px 8px', borderRadius: '4px', padding: '2px 4px' }}>
                      <span style={{ color: 'white' }}>backend</span>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            <div style={{ color: 'white' }}>
              No data
            </div>
          }
        </div>
      </div>
    </div >
  );
}

export default LanguagesPage;
