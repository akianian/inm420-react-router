import Name from '../components/Name';
import PageTitle from '../components/PageTitle';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

function Home(props) {
  const startState = { autoAlpha: 0, y: -50 };
  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={2000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done
        });
      }}
    >
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
    </Transition>
  );
}

export default Home;