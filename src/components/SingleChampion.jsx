import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { abilityStringCorrector, fetchSingleChampions } from "../../utils";
import LoadingIcons from "react-loading-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChampStats } from "./ChampStats";
import { ChampCarousel } from "./ChampCarousel";
import { ChampSpells } from "./ChampSpells";

export const SingleChampion = () => {
 const { champion_name } = useParams();
 const [singleChamp, setSingleChamp] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 const [spellDescriptions, setSpellDescriptions] = useState([]);
 const [spellTooltip, setSpellTooltip] = useState([]);
 const [displaySpell, setDisplaySpell] = useState(0);
 const [spellName, setSpellName] = useState(null);

 useEffect(() => {
  fetchSingleChampions(champion_name).then((response) => {
   setSingleChamp(response);
   setIsLoading(false);
  });
 }, []);

 useEffect(() => {
  if (singleChamp === null) return;
  let spells = [];
  let tooltips = [];
  spells.push(singleChamp.data[champion_name].passive.description);
  console.log(singleChamp);
  singleChamp.data[champion_name].spells.forEach((spell) => {
   spells.push(spell.description);
   tooltips.push(spell.tooltip);
  });
  setSpellDescriptions(spells);
  setSpellTooltip(tooltips);
  setSpellName(singleChamp.data[champion_name].passive.name);
 }, [singleChamp]);

 if (isLoading)
  return (
   <div className="loader">
    <LoadingIcons.BallTriangle stroke="#000000" />
   </div>
  );
 const statsObject = singleChamp.data[champion_name].stats;
 return (
  <>
   <ChampCarousel singleChamp={singleChamp} champion_name={champion_name} />
   <h4 className="single-champ-name">{champion_name}</h4>
   <p className="single-champ-lore">{singleChamp.data[champion_name].lore}</p>
   <div className="class-stats">
    <div className="type-imgs">
     {singleChamp.data[champion_name].tags.map((type) => {
      return <img key={type} src={`/classes/${type}.png`} />;
     })}
    </div>
    <ChampStats singleChamp={singleChamp} champion_name={champion_name} />
   </div>
   <ChampSpells singleChamp={singleChamp} champion_name={champion_name} setDisplaySpell={setDisplaySpell} setSpellName={setSpellName} />
   {spellDescriptions.length === 0 ? (
    <p>Loading...</p>
   ) : (
    <div className="single-spell-description">
     {displaySpell === 0 ? (
      <>
       <h4>{spellName}</h4>
       <p>{spellDescriptions[0]}</p>
      </>
     ) : null}
     {displaySpell === 1 ? (
      <>
       <h4>{spellName}</h4>
       <p>
        {spellDescriptions[1]}
        <br />
        {spellTooltip[0]}
       </p>
      </>
     ) : null}
     {displaySpell === 2 ? (
      <>
       <h4>{spellName}</h4>
       <p>
        {spellDescriptions[2]}
        <br />
        {spellTooltip[1]}
       </p>
      </>
     ) : null}
     {displaySpell === 3 ? (
      <>
       <h4>{spellName}</h4>
       <p>
        {spellDescriptions[3]}
        <br />
        {spellTooltip[2]}
       </p>
      </>
     ) : null}
     {displaySpell === 4 ? (
      <>
       <h4>{spellName}</h4>
       <p>
        {spellDescriptions[4]}
        <br />
        {spellTooltip[3]}
       </p>
      </>
     ) : null}
    </div>
   )}
  </>
 );
};
