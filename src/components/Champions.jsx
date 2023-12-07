import { Link } from "react-router-dom";
import { SortBy } from "./SortBy";

export const Champions = ({ champions, setChampions }) => {
 return (
  <div className="champions">
   <h2>Champions</h2>
   <SortBy setChampions={setChampions} />
   <ul className="champ-list">
    {champions.map((champion) => {
     return (
      <li className="champ-card" key={champion.champ.name}>
       <Link to={`./${champion.champ.id}`}>
        <h4 className="champ-name">{champion.champ.name}</h4>
        <p className="champ-title">{champion.champ.title}</p>
        <img className="champ-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.champ.image.full}`} />
       </Link>
      </li>
     );
    })}
   </ul>
  </div>
 );
};
