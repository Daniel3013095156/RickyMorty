import { useEffect, useState } from 'react';
import './App.css';
import { getRandomDimensión } from './util/random';
import axios from 'axios';
import Location from './util/components/Location';
import ResidentList from './util/components/ResidentList';

function App() {
  const [location, setlocation] = useState(null);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimensión()}`;

    axios
      .get(URL)
      .then(({ data }) => setlocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <header className="bg-space">
        <Location location={location} setlocation={setlocation} />
      </header>
      <ResidentList location={location} residents={location?.residents} />
    </main>
  );
}

export default App;
