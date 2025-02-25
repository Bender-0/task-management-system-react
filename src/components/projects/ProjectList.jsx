import ProjectCard from "../projects/ProjectCard";
import Header from "../common/Header";
import useFetchData from "../../../hooks/useFetchData";

export default function ProjectList() {
  const data = useFetchData("/api/projects");

  return (
    <div>
      <Header header="Projects List" />
      <ProjectCard data={data} />
    </div>
  );
}
