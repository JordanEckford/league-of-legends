import axios from "axios";

export const fetchAllChampions = () => {
 return axios
  .get("https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_GB/champion.json")
  .then((response) => {
   return response.data.data;
  })
  .catch((err) => {
   console.log(err);
  });
};

export const fetchSingleChampions = (champion_name) => {
 return axios
  .get(`https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion/${champion_name}.json`)
  .then((response) => {
   return response.data;
  })
  .catch((err) => {
   console.log(err);
  });
};

export const abilityStringCorrector = (string, statsObject) => {
 let newString = string
  .replaceAll(
   "<physicalDamage>{{ basedamage }} physical damage</physicalDamage>",
   statsObject.attackdamage + " damage (+ " + statsObject.attackdamageperlevel + " damage per level)"
  )
  .replaceAll("<br /><br />", "")
  .replaceAll("<br />", "")
  .replaceAll(
   "<attackSpeed>Attack Speed</attackSpeed>",
   statsObject.attackspeed + " attack speed (+" + statsObject.attackspeedperlevel + " attack speed per level"
  )
  .replaceAll("<magicDamage>{{ damage }} magic damage</magicDamage>", statsObject.mp + "magic");
 return newString;
};
