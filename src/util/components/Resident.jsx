import axios from "axios"
import { useEffect, useState } from "react"

const Resident = ({residentUrl}) => {
const [residentInfo, setresidentInfo] = useState(null)

  const statusStyle = {
    "Alive":"bg-green-500",
    "Dead":"bg-red-500",
    "unknown":"bg-gray-400"
  }

    useEffect (()=> {
        axios.get(residentUrl)
        .then(({data}) => setresidentInfo(data))
        .catch((err) => console.log(err))
    }, [])

return (
    
    <article>
<div className="relative">
  <img src={residentInfo?.image} alt="" />
  <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
    <div className={`h-6 w-6 ${statusStyle [residentInfo?.status]} rounded-full`}></div>
    <div className="bg-black bg-opacity-50 text-white border-1 border-green-500 px-6 py-1 shadow-lg">
      {residentInfo ?.status}
    </div>
  </div>
</div>



    <section>
        <h4>{residentInfo?.name}</h4>
        <ul>
            <li>Species: <span>{residentInfo?.species}</span></li>
            <li>Origin: <span>{residentInfo?.origin.name}</span></li>
            <li>Times apper: <span>{residentInfo?.episode.length}</span></li>
        </ul>
    </section>
</article>
)
}

export default Resident
