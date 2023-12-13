import { useState } from "react";
import { fetchAllItems } from "../../utils";

export const ItemSortby = ({ setItems }) => {
 const [inStore, setInStore] = useState("All");
 const [filterBy, setFilterBy] = useState("All");
 const [showOptions, setShowOptions] = useState(false);
 const [sortBy, setSortBy] = useState("Default");

 let tags = [
  "Boots",
  "ManaRegen",
  "HealthRegen",
  "Health",
  "CriticalStrike",
  "SpellDamage",
  "Mana",
  "Armor",
  "SpellBlock",
  "LifeSteal",
  "SpellVamp",
  "Jungle",
  "Damage",
  "Lane",
  "AttackSpeed",
  "OnHit",
  "Trinket",
  "Active",
  "Consumable",
  "CooldownReduction",
  "AbilityHaste",
  "Stealth",
  "Vision",
  "NonbootsMovement",
  "Tenacity",
  "MagicPenetration",
  "ArmorPenetration",
  "Aura",
  "Slow",
  "MagicResist",
  "GoldPer",
 ];

 const handleSubmit = (event) => {
  event.preventDefault();
  fetchAllItems().then((data) => {
   const sortedItems = [];
   for (let key in data) {
    if (filterBy === "All") {
     if (data[key].inStore === false && inStore === "false") {
      sortedItems.push(data[key]);
     } else if (inStore === "true" && data[key].inStore === undefined) {
      sortedItems.push(data[key]);
     } else if (inStore === "All") {
      sortedItems.push(data[key]);
     }
    } else {
     if (data[key].inStore === false && inStore === "false" && data[key].tags.includes(filterBy)) {
      sortedItems.push(data[key]);
     } else if (inStore === "true" && data[key].inStore === undefined && data[key].tags.includes(filterBy)) {
      sortedItems.push(data[key]);
     } else if (inStore === "All" && data[key].tags.includes(filterBy)) {
      sortedItems.push(data[key]);
     }
    }
   }
   if (sortBy === "Default") {
    setItems(sortedItems);
   } else if (sortBy === "Ascending") {
    let ascending = sortedItems.sort((a, b) => {
     return a.gold.base - b.gold.base;
    });
    setItems(ascending);
   } else if (sortBy === "Descending") {
    let ascending = sortedItems.sort((a, b) => {
     return b.gold.base - a.gold.base;
    });
    setItems(ascending);
   }
  });
 };

 if (!showOptions)
  return (
   <button
    onClick={() => {
     setShowOptions(!showOptions);
    }}
   >
    Show Sort Options
   </button>
  );

 return (
  <div className="sortby-content">
   <button
    onClick={() => {
     setShowOptions(!showOptions);
    }}
   >
    Hide Sort Options
   </button>
   <h2 className="item-sortby-header">Item Sortby</h2>
   <form className="item-sort-form" onSubmit={handleSubmit}>
    <div className="sortby-section">
     <label className="sortby-label" htmlFor="instore">
      Status:
     </label>
     <select
      className="item-sort"
      id="instore"
      onChange={(e) => {
       setInStore(e.target.value);
      }}
     >
      <option value={"All"}>All</option>
      <option value={"true"}>Currently In Store</option>
      <option value={"false"}>Not Currently In Store</option>
     </select>
    </div>
    <div className="sortby-section">
     <label className="sortby-label" htmlFor="tag">
      Tag:
     </label>
     <select
      className="item-sort"
      id="tag"
      onChange={(e) => {
       setFilterBy(e.target.value);
      }}
     >
      <option>All</option>
      {tags.map((tag) => {
       return <option>{tag}</option>;
      })}
     </select>
    </div>
    <div className="sortby-section">
     <label htmlFor="sort" className="sortby-label">
      Sort by cost:
     </label>
     <select
      className="item-sort"
      id="sort"
      onChange={(e) => {
       setSortBy(e.target.value);
      }}
     >
      <option>Default</option>
      <option>Ascending</option>
      <option>Descending</option>
     </select>
    </div>
    <div className="button-container">
     <button className="item-sort-submit" type="submit">
      Submit
     </button>
    </div>
   </form>
  </div>
 );
};
