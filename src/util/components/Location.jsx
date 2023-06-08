// Location.jsx
import axios from "axios";

const Location = ({ location, setlocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios.get(URL)
      .then(({ data }) => setlocation(data))
      .catch((err) => console.log(err));
  }

  return (
    <section className="bg-space min-h-screen text-white">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">Rick and Morty Location Finder</h1>
      </header>

      <section className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
          <input id="newLocation" className="text-black bg-gray-200 rounded px-4 py-2 mr-2" placeholder="Type a location ID..." type="text" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">Search</button>
        </form>

        {location && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
            <ul>
              <li>Type: {location.type}</li>
              <li>Dimension: {location.dimension}</li>
              <li>Number of Residents: {location.residents.length}</li>
            </ul>
          </div>
        )}
      </section>
    </section>
  );
}

export default Location;
