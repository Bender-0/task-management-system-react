import CategoryCard from "./CategoryCard";
import Header from "../common/Header";
import useFetchData from "../../../hooks/useFetchData";

export default function CategoryList() {
  const data = useFetchData("/api/categories");

  return (
    <div>
      <Header header="Category List" />
      <CategoryCard data={data} />
    </div>
  );
}
