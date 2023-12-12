import { ItemSortby } from "./ItemSortby";

export const Items = ({ items, setItems }) => {
 return (
  <div className="items-content">
   <h1>Items</h1>
   <ItemSortby setItems={setItems} />

   <ul className="item-container">
    {items.map((item) => {
     return (
      <li className="item-card" key={item.key}>
       <h4 className="item-name">{item.name}</h4>
       <img className="item-img" src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.image.full}`} />
      </li>
     );
    })}
   </ul>
  </div>
 );
};
