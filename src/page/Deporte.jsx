import { Article, Content, Navbar } from "../components";

export const Deporte = () => {
  return (
    <>
      <Navbar title={"MAS DEPORTE"} bg={"#2E7D32"} />
      <Content>
        <Article
          title={"Futbol"}
          urlImage={
            "https://elcomercio.pe/resizer/jL-XY9ML4sWkvPs4xKOV2AHpEg4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5EYIQTV4HZG6XM5VHF4HUZ36UI.jpg"
          }
          content="Javi Gracia ficha por el Leeds y ya son seis los entranadores españoles en la premier"
        />
        <Article
          title={"Futbol"}
          urlImage={
            "https://elcomercio.pe/resizer/jL-XY9ML4sWkvPs4xKOV2AHpEg4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5EYIQTV4HZG6XM5VHF4HUZ36UI.jpg"
          }
          content="Javi Gracia ficha por el Leeds y ya son seis los entranadores españoles en la premier"
        />
        <Article
          title={"Sorprendente medida"}
          urlImage={
            "https://elcomercio.pe/resizer/jL-XY9ML4sWkvPs4xKOV2AHpEg4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5EYIQTV4HZG6XM5VHF4HUZ36UI.jpg"
          }
          content="Javi Gracia ficha por el Leeds y ya son seis los entranadores españoles en la premier"
        />
      </Content>
    </>
  );
};
