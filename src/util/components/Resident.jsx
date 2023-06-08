// Resident.jsx
import axios from "axios";
import { useEffect, useState } from "react";

const Resident = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const statusStyle = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-400",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={residentInfo?.image} alt={residentInfo?.name} className="w-full" />
        <div className="flex items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
          <div
            className={`h-6 w-6 ${statusStyle[residentInfo?.status]} rounded-full shadow-xl animate-pulse`}
          ></div>
          <div className="bg-black bg-opacity-50 text-white border-1 border-green-500 px-6 py-1 shadow-lg">
            {residentInfo?.status}
          </div>
        </div>
      </div>

      <section className="p-4">
        <h4 className="text-xl font-bold">{residentInfo?.name}</h4>
        <ul className="mt-2">
          <li>
            <span className="font-semibold">Species:</span> {residentInfo?.species}
          </li>
          <li>
            <span className="font-semibold">Origin:</span> {residentInfo?.origin.name}
          </li>
          <li>
            <span className="font-semibold">Times appeared:</span> {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resident;
