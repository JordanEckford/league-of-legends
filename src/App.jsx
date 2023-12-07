import "./App.css";
import { Champions } from "./components/Champions";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { SingleChampion } from "./components/SingleChampion";
import { useState, useEffect } from "react";
import { fetchAllChampions } from "../utils";
import { SideBar } from "./components/Sidebar";

function App() {
 const [championObject, setChampionObject] = useState(null);
 const [champions, setChampions] = useState([]);

 useEffect(() => {
  fetchAllChampions().then((data) => {
   setChampionObject(data);
  });
 }, []);

 useEffect(() => {
  let champs = [];
  for (let key in championObject) {
   champs.push({ champ: championObject[key] });
  }
  setChampions(champs);
 }, [championObject]);

 return (
  <>
   <Header />
   <SideBar />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/champions" element={<Champions champions={champions} setChampions={setChampions} />} />
    <Route path="/items" element={<Items />} />
    <Route path="/champions/:champion_name" element={<SingleChampion champions={champions} />} />
   </Routes>
  </>
 );
}

export default App;
