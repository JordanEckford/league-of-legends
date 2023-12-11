import { Link } from "react-router-dom";
export const Home = ({ champions }) => {
 if (champions.length === 0) {
  return (
   <div className="home-screen">
    <h2>Welcome to my League of Legends information app.</h2>
   </div>
  );
 }
 let randomChampName;
 if (champions.length !== 0) {
  const randomNumber = Math.floor(Math.random() * (champions.length - 1 - 0 + 1) + 0);
  randomChampName = champions[randomNumber].champ.name;
 }
 return (
  <div className="home-screen">
   <h2 className="home-h2">Welcome to my League of Legends information app.</h2>
   <p className="home-message">
    This app fetches data from the{" "}
    <a href="https://developer.riotgames.com/docs/lol" target="_blank">
     League of Legends API
    </a>{" "}
    and displays it in a user friendly manner
   </p>
   <h3 className="home-h3">Not sure where to go? Check out a random Champion below:</h3>
   <Link to={`/champions/${randomChampName}`}>
    <button className="random-champ-button">Random Champion</button>
   </Link>
  </div>
 );
};
