import { Article, ArticleImg, Content, Navbar } from "../components";

export const Deporte = () => {
  return (
    <>
      <Navbar title="MAS DEPORTE" bg={"#2E7D32"} />
      <Content>
        <Article
          title="Futbol"
          urlImage={
            "https://elcomercio.pe/resizer/jL-XY9ML4sWkvPs4xKOV2AHpEg4=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5EYIQTV4HZG6XM5VHF4HUZ36UI.jpg"
          }
          content="Javi Gracia ficha por el Leeds y ya son seis los entranadores españoles en la premier"
        />
        <ArticleImg
          title="El corner ingles"
          urlImage={
            "https://www.lavozdelsur.es/uploads/s1/11/71/40/5/javier-ruiz-periodista-germa-n-mesa-10.jpeg"
          }
          content="Periodista en venta"
          author="JHON CARLIN"
        />
        <Article
          title="Sorprendente medida"
          urlImage={
            "https://editorial.uefa.com/resources/0252-0ce1fd5dc86e-3de8111035a4-1000/the_trial_with_five_officials_proved_a_success_in_the_uefa_europa_league.jpeg"
          }
          content="El cuestionario con el que la CTA investiga si los arbitros han tenido relacion con el hijo de Negreira"
        />
      </Content>
    </>
  );
};
