export const ChampStats = ({ singleChamp, champion_name }) => {
 return (
  <>
   <div className="stats-container">
    <div className="attack-container">
     <div className="pie" style={{ "--p": singleChamp.data[champion_name].info.attack * 10, "--c": "red", "--b": "10px" }}>
      {singleChamp.data[champion_name].info.attack / 2}/5
     </div>
     <p>Attack</p>
    </div>
    <div className="defense-container">
     <div className="pie" style={{ "--p": singleChamp.data[champion_name].info.defense * 10, "--c": "blue", "--b": "10px" }}>
      {singleChamp.data[champion_name].info.defense / 2}/5
     </div>
     <p>Defense</p>
    </div>
    <div className="magic-container">
     <div className="pie" style={{ "--p": singleChamp.data[champion_name].info.magic * 10, "--c": "purple", "--b": "10px" }}>
      {" "}
      {singleChamp.data[champion_name].info.magic / 2}/5
     </div>
     <p>Magic</p>
    </div>
    <div className="difficulty-container">
     <div className="pie" style={{ "--p": singleChamp.data[champion_name].info.difficulty * 10, "--c": "green", "--b": "10px" }}>
      {" "}
      {singleChamp.data[champion_name].info.difficulty / 2}/5
     </div>
     <p>Difficulty</p>
    </div>
   </div>
  </>
 );
};
