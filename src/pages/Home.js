import Name from '../components/Name';
import PageTitle from '../components/PageTitle';

function Home() {
  return (
    <>
      <div className="HomeContent">
        <div className="HomeText">
          <PageTitle title="Home" />
          <p>Hello! My name is <Name first="Aida" last="Kianian" />.</p>
          <br />
          <p>I am a web, application, motion, graphic, 3D, UI/UX and game designer who enjoys taking pictures and editing videos on her own time.</p>
          <br />
          <p>I am also helping people start designing their brands and being different from ground up.</p>
        </div>
        <div className="HomeImage">
          <img src="/hero.png" alt="Homepage Hero Banner" />
        </div>
      </div>
    </>
  );
}

export default Home;