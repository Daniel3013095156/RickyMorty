import axios from "axios"
const Location = ({location, setlocation}) => {

  const handleSubmit= (e) => {
    e.preventDefault()
    const newLocation= e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({data}) => setlocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section>
      {/*Input de busqueda*/}
      <form onSubmit={handleSubmit}>
        "
        <input id="newLocation" className= "text-black" placeholder="Type a locatión Id..." type="text" />
        <button>Search</button> <i className='bx bx-search-alt'></i>
      </form>
      {/*Info Location*/}
    

    <section>
        <h2>{location?.name}</h2>
        <ul>
            <li>{location?.type}</li>
            <li>{location?.dimension} </li>
            <li>{location?.residents.length}</li>
        </ul>
      </section>
    <section>

        </section>
    </section>
  )
}

export default Location
