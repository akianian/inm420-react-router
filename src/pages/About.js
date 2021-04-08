import PageTitle from '../components/PageTitle';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

function About(props) {
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
        <div className="AboutContent">
          <div className="AboutText">
            <PageTitle title="About Me" />
            <p>As an interactive designer, I have always tried to bring thought, discipline and creativity into each project. I constantly try to make things possible, and I get such joy from the act of creation.</p>
            <br />
            <p>As a life-long learner, I am deeply committed to learning new software and technologies related to my work, and I try to keep myself updated.</p>
            <br />
            <p>I am inspired by everything around me, from a simple thing like light through water in a glass, as play and complexity is to be found everything.</p>
          </div>
          <div className="AboutPhoto">
            <img src="/about-me.png" alt="Aida Kianian" />
          </div>
        </div>
      </>
    </Transition>
  );
}

export default About;