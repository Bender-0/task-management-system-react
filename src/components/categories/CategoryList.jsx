export default function CategoryList() {
  const data = {
    id: 1,
    name: "category 1",
  };

  

  return (
    <>
      <div className="flex justify-center m-5">
        <p className="font-bold text-2xl text-gray-700">Categories List</p>
      </div>

      <div className="flex justify-center">
        <ul className="">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {data.name}
                </p>
                {/* <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {data.created_at}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {data.updated_at}
                </p> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
