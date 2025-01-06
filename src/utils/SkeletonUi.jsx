import { Skeleton } from "@/components/ui/skeleton";

const SkeletonUi = () => {
  const data = "";
  return (
    <div className="w-full mx-auto bg-white shadow-lg  rounded-lg mt-10 overflow-hidden">
      <div className="text-4xl my-2 font-mono animate-bounce text-gray-400">
        Github Profile Page
      </div>
      <div className="flex justify-center items-center bg-gray-200 py-6">
        <div className="flex justify-center items-center w-40 h-40">
          <div className="border-l-8 border-white rounded-full animate-spin-slow w-28 h-28"></div>
        </div>
      </div>

      {/* User Info */}
      <div className="text-center py-6 px-4">
        <h2 className="text-2xl font-bold h-6 bg-gray-200">
          {data?.name || ""}
        </h2>
        <p className="text-sm text-gray-600 mb-4"></p>
        <p className="mt-2  bg-gray-200 h-3 text-base"></p>
      </div>

      {/* Footer with Followers and Repo Link */}
      <div className="flex justify-between items-center px-4 py-4 ">
        <p className="mt-2  bg-gray-200  text-gray-200">view repository</p>
        <div className="text-sm  text-gray-600">
          <p className="mt-2  bg-gray-200  text-gray-200">afdasfda</p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonUi;
