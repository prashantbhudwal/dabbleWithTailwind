export default function GridLayoutOne() {
  return (
    <div className="flex-1 max-w-4xl mx-auto p-10">
      <ul className="grid grid-cols-3 gap-3">
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Sidebar</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center"> Header</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Footer</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Hero Section</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Hero Image</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Hero Form</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Hero Content</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Features Section</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">How it works</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Chat with us</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Another Section</div>
        </li>
        <li className="bg-white rounded-lg shadow-xl">
          <div className="h-24 p-3 text-center">Another Section</div>
        </li>
      </ul>
    </div>
  );
}
