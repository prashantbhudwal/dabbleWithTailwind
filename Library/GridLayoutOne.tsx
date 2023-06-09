export default function GridLayoutOne() {
  return (
    <div className="mx-auto flex-1 p-10">
      <ul className="grid grid-cols-12 grid-rows-6 gap-3">
        <li className="col-span-3 col-start-1 row-span-4 row-start-2 rounded-lg bg-white shadow-xl ">
          <div className="max-h-screen overflow-y-scroll p-3 text-center">
            Left Sidebar
            {Array.from({ length: 100 }, (_, index) => (
              <div key={index + 1}>{index + 1}</div>
            ))}
          </div>
        </li>
        <li className="col-span-full row-span-1 row-start-1 rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center"> Header</div>
        </li>
        <li className="col-span-full row-span-1 row-start-6 rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Footer</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Hero Section</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Hero Image</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Hero Form</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Hero Content</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Features Section</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">How it works</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Chat with us</div>
        </li>
        <li className="col-span-2 col-start-11 row-span-4 row-start-2 rounded-lg bg-white shadow-xl ">
          <div className="h-24 p-3 text-center">Right Sidebar</div>
        </li>
        <li className="rounded-lg bg-white shadow-xl">
          <div className="h-24 p-3 text-center">Another Section</div>
        </li>
      </ul>
    </div>
  );
}
