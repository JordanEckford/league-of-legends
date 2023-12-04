import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleChampions } from "../../utils";
import LoadingIcons from "react-loading-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const SingleChampion = () => {
 const { champion_name } = useParams();
 const [singleChamp, setSingleChamp] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  fetchSingleChampions(champion_name).then((response) => {
   setSingleChamp(response);
   setIsLoading(false);
  });
 }, []);

 if (isLoading)
  return (
   <div className="loader">
    <LoadingIcons.BallTriangle stroke="#000000" />
   </div>
  );
 return (
  <>
   <p>
    <Link to="/champions">Back to Champions</Link>
   </p>
   <h4>Single Champion {champion_name}</h4>
   <div className="skin-image-container">
    <div className="carousel-container">
     <Carousel showThumbs={false} width={"100%"} infiniteLoop={true}>
      {singleChamp.data[champion_name].skins.map((skin) => {
       return (
        <div>
         <img className="skin-image" key={skin.num} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_${skin.num}.jpg`} />
         <p className="legend">{skin.name}</p>
        </div>
       );
      })}
     </Carousel>
    </div>
   </div>
  </>
 );
};

{
 /* <LoadingIcons.Audio />
<LoadingIcons.BallTriangle />
<LoadingIcons.Bars />
<LoadingIcons.Circles />
<LoadingIcons.Grid />
<LoadingIcons.Hearts />
<LoadingIcons.Oval />
<LoadingIcons.Puff />
<LoadingIcons.Rings />
<LoadingIcons.SpinningCircles />
<LoadingIcons.TailSpin />
<LoadingIcons.ThreeDots /> */
}
