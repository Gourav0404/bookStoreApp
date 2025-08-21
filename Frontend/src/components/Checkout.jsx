import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Buy Now button se aaya hua product

  if (!item) {
    return <h2>No item selected</h2>;
  }

  return (
    <div className="p-6 h-screen  flex justify-center">
      <Link to='/' className="text-2xl font-bold text-red-500">Click Go Back</Link>
      <div className="mt-10 h-auto w-80 border p-4 rounded-lg shadow-md">
        <img src={item.image} alt={item.name} className="w-80  rounded-md" />
        <h2 className="text-xl mt-2">{item.name}</h2>
        <p>{item.title}</p>
        <p className="font-semibold mt-2">Price: ${item.price}</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;

