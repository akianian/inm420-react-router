import PageTitle from '../components/PageTitle';
function About() {
  return (
    <>
      <div className="AboutContent">
        <div className="AboutText">
          <PageTitle title="About Me" />
          <p>As an interactive designer, I have always tried to put thought, discipline and creativity into each project. I constantly try to make things possible, and I get such joy from the act of creation.</p>
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
  );
}

export default About;