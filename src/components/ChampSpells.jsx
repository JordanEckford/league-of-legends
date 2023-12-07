export const ChampSpells = ({ singleChamp, champion_name, setDisplaySpell, setSpellName }) => {
 return (
  <>
   <div className="champ-spells">
    <div
     onClick={() => {
      setDisplaySpell(0);
      setSpellName(singleChamp.data[champion_name].passive.name);
     }}
     className="single-spell"
    >
     <img className="spell-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/${singleChamp.data[champion_name].passive.image.full}`} />
     <p className="spell-name">{singleChamp.data[champion_name].passive.name}</p>
    </div>
    {singleChamp.data[champion_name].spells.map((spell, index) => {
     return (
      <>
       <div
        onClick={() => {
         setDisplaySpell(index + 1);
         setSpellName(spell.name);
        }}
        key={spell.name}
        className="single-spell"
       >
        <img className="spell-img" src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/${spell.image.full}`} />
        <p className="spell-name">{spell.name}</p>
       </div>
      </>
     );
    })}
   </div>
  </>
 );
};
