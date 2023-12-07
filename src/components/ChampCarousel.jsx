import { Carousel } from "react-responsive-carousel";

export const ChampCarousel = ({ singleChamp, champion_name }) => {
 return (
  <>
   <div className="carousel-container">
    <Carousel autoPlay showThumbs={false} width={"100%"} infiniteLoop={true} transitionTime={300} interval={9000}>
     {singleChamp.data[champion_name].skins.map((skin) => {
      return (
       <div key={skin.num}>
        <img className="skin-image" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_${skin.num}.jpg`} />
        <p className="legend">{skin.name}</p>
       </div>
      );
     })}
    </Carousel>
   </div>
  </>
 );
};
