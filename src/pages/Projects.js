import PageTitle from '../components/PageTitle';
import SingleProject from '../components/SingleProject';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

function Projects(props) {
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
        <PageTitle title="Projects" />
        <div className="AllProjects">
          {/* Iterating over projects passed to the page to display them */}
          {props.projects?.map((project, i) => {
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
                <SingleProject key={i} project={project} />
              </Transition>
            )
          })}
        </div>
      </>
    </Transition>
  );
}

export default Projects;