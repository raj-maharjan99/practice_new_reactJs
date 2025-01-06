import { Link } from "react-router-dom";

const NotValid = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <p className="text-3xl font-bold text-red-500 mb-4">
        Github user name not valid.
      </p>
      <Link
        to={-1}
        className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Back
      </Link>
      <img src={"oopss.jpg"} alt="" className="rounded-full shadow-2xl" />
    </div>
  );
};

export default NotValid;
