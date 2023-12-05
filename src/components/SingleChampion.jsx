import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { abilityStringCorrector, fetchSingleChampions } from "../../utils";
import LoadingIcons from "react-loading-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SingleChampion = () => {
 const { champion_name } = useParams();
 const [singleChamp, setSingleChamp] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  fetchSingleChampions(champion_name).then((response) => {
   setSingleChamp(response);
   setIsLoading(false);
  });
 }, []);

 if (isLoading)
  return (
   <div className="loader">
    <LoadingIcons.BallTriangle stroke="#000000" />
   </div>
  );
 const statsObject = singleChamp.data[champion_name].stats;
 console.log(singleChamp);
 console.log(statsObject);
 return (
  <>
   <div className="back-to-champs">
    <button>
     <Link to="/champions">Back to Champions </Link>
    </button>
   </div>

   <div className="carousel-container">
    <Carousel autoPlay showThumbs={false} width={"100%"} infiniteLoop={true} transitionTime={300} interval={9000}>
     {singleChamp.data[champion_name].skins.map((skin) => {
      return (
       <div key={skin.num}>
        <img className="skin-image" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_${skin.num}.jpg`} />
        <p className="legend">{skin.name}</p>
       </div>
      );
     })}
    </Carousel>
   </div>
   <h4 className="single-champ-name">{champion_name}</h4>
   <p className="single-champ-lore">{singleChamp.data[champion_name].lore}</p>
   <div className="class-stats">
    <div className="type-imgs">
     {singleChamp.data[champion_name].tags.map((type) => {
      return <img key={type} src={`/classes/${type}.png`} />;
     })}
    </div>
    <div className="stats-container">
     <div className="attack-border">
      <div className="red" style={{ width: singleChamp.data[champion_name].info.attack * 10 + "%" }}>
       Attack
      </div>
     </div>
     <div className="defense-border">
      <div className="blue" style={{ width: singleChamp.data[champion_name].info.defense * 10 + "%" }}>
       Defense
      </div>
     </div>
     <div className="magic-border">
      <div className="purple" style={{ width: singleChamp.data[champion_name].info.magic * 10 + "%" }}>
       Magic
      </div>
     </div>
     <div className="difficulty-border">
      <div className="grey" style={{ width: singleChamp.data[champion_name].info.difficulty * 10 + "%" }}>
       Difficulty
      </div>
     </div>
    </div>
   </div>
   <div className="champ-spells">
    <div className="single-spell">
     <img className="spell-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/${singleChamp.data[champion_name].passive.image.full}`} />
     <p>{singleChamp.data[champion_name].passive.name}</p>
     <p>{singleChamp.data[champion_name].passive.description}</p>
    </div>
    {singleChamp.data[champion_name].spells.map((spell) => {
     return (
      <>
       <div key={spell.name} className="single-spell">
        <img className="spell-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/${spell.image.full}`} />
        <p>{spell.name}</p>
        <p>
         {spell.description} <br />
         {abilityStringCorrector(spell.tooltip, statsObject)}
        </p>
       </div>
      </>
     );
    })}
   </div>
  </>
 );
};
