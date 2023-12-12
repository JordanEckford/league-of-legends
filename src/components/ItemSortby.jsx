import { useState } from "react";
import { fetchAllItems } from "../../utils";

export const ItemSortby = ({ setItems }) => {
 const [inStore, setInStore] = useState("All");
 const [filterBy, setFilterBy] = useState("All");
 const [showOptions, setShowOptions] = useState(false);

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
   setItems(sortedItems);
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
  <>
   <button
    onClick={() => {
     setShowOptions(!showOptions);
    }}
   >
    Hide Sort Options
   </button>
   <h2 className="item-sortby-header">Item Sortby</h2>
   <form className="item-sort-form" onSubmit={handleSubmit}>
    <label htmlFor="instore">Status:</label>
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
    <label htmlFor="tag">Tag:</label>
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
    <button className="item-sort-submit" type="submit">
     Submit
    </button>
   </form>
  </>
 );
};
