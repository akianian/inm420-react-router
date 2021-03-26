function SingleProject(props) {
  return (
    <div className="SingleProject">
      <img src={props.project?.img} alt={props.project?.title} />
      <h4>{props.project?.title}</h4>
    </div>
  )
}

export default SingleProject;