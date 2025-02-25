/* eslint-disable react/prop-types */
export default function Header({header}) {
  return (
    <>
      <div className="flex justify-center m-5">
        <h1 className="font-bold text-2xl text-gray-700">{header}</h1>
      </div>
    </>
  );
}
