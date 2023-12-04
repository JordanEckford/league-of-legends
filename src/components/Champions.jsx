import { Link } from "react-router-dom";

export const Champions = ({ champions }) => {
 return (
  <div>
   <h2>Champions</h2>
   <ul className="champ-list">
    {champions.map((champion) => {
     return (
      <>
       <li className="champ-card" key={champion.champ.name}>
        <Link to={`./${champion.champ.id}`}>
         <h4 className="champ-name">{champion.champ.name}</h4>
         <p className="champ-title">{champion.champ.title}</p>
         <img className="champ-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${champion.champ.image.full}`} />
        </Link>
       </li>
      </>
     );
    })}
   </ul>
  </div>
 );
};
