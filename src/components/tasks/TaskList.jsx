import TaskCard from "./TaskCard";
import Header from "../common/Header";
import useFetchData from "../../../hooks/useFetchData";

export default function TaskList() {
  const data = useFetchData("/api/tasks");

  return (
    <div>
      <Header header="Tasks List" />
      <TaskCard data={data} />
    </div>
  );
}
