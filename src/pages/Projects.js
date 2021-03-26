import PageTitle from '../components/PageTitle';
import SingleProject from '../components/SingleProject';

function Projects(props) {
  return (
    <>
      <PageTitle title="Projects" />
      <div className="AllProjects">
        {/* Iterating over projects passed to the page to display them */}
        {props.projects?.map((project) => {
          return (<SingleProject project={project} />)
        })}
      </div>
    </>
  );
}

export default Projects;