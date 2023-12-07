import { Link } from "react-router-dom";

export const BackToChampions = () => {
 return (
  <>
   <div>
    <button className="back-to-champs">
     <Link to="/champions">Back to Champions </Link>
    </button>
   </div>
  </>
 );
};
