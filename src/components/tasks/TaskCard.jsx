/* eslint-disable react/prop-types */

export default function TaskCard({ data }) {
  return (
    <div className="flex gap-[20px] flex-wrap justify-center items-center content-center">
      {data.map((item) => (
        <ul key={item.id} className="w-1/4 rounded-md bg-teal-100 shadow">
          <li>
            <h1 className="text-sm/6 font-semibold text-gray-900 text-center ">
              {item.title}
            </h1>
          </li>
        </ul>
      ))}
    </div>
  );
}
