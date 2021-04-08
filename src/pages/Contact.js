import ContactForm from '../components/ContactForm';
import PageTitle from '../components/PageTitle';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

function Contact(props) {
  const startState = { autoAlpha: 0, y: -50 };
  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={200}
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
        <PageTitle title="Contact Me" />
        <ContactForm />
      </>
    </Transition>
  );
}

export default Contact;