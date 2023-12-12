import { useState } from "react";
import { fetchAllChampions } from "../../utils";

export const SortBy = ({ setChampions }) => {
 const [showSortBy, setShowSortBy] = useState();
 const [sortBy, setSortBy] = useState("All");

 const handleSubmit = (event) => {
  event.preventDefault();
  if (sortBy === "All") {
   fetchAllChampions().then((data) => {
    let champs = [];
    for (let key in data) {
     champs.push({ champ: data[key] });
    }
    setChampions(champs);
   });
  } else {
   fetchAllChampions().then((data) => {
    let champs = [];
    for (let key in data) {
     champs.push({ champ: data[key] });
    }
    let filtered = champs.filter((champ) => {
     return champ.champ.tags.includes(sortBy);
    });
    setChampions(filtered);
   });
  }
 };

 if (!showSortBy)
  return (
   <div className="sortby">
    <button
     onClick={() => {
      setShowSortBy(true);
     }}
    >
     Filter Champions
    </button>
   </div>
  );

 return (
  <div className="sortby">
   <button
    onClick={() => {
     setShowSortBy(false);
    }}
   >
    Hide Sort By
   </button>
   <form className="sortby-form" onSubmit={handleSubmit}>
    <select
     onChange={(e) => {
      setSortBy(e.target.value);
     }}
    >
     <option
      onChange={(e) => {
       setSortBy(e.target.value);
      }}
     >
      All
     </option>
     <option value="Fighter">Fighter</option>
     <option value="Assassin">Assassin</option>
     <option value="Marksman">Marksman</option>
     <option value="Support">Support</option>
     <option value="Mage">Mage</option>
     <option value="Tank">Tank</option>
    </select>
    <button type="submit">Submit</button>
   </form>
  </div>
 );
};
