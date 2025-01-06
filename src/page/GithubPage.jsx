import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetGitHubUserQuery } from "@/slices/gitHubApi";

import React, { useState } from "react";
import SkeletonUi from "@/utils/SkeletonUi";
import { Link } from "react-router-dom";
import NotValid from "@/utils/Not-Valid";

const GithubPage = () => {
  const [input, setInput] = useState("");
  const [gitUserName, setGitHubUserName] = useState(null);
  const { isLoading, data, isSuccess } = useGetGitHubUserQuery(gitUserName);

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setGitHubUserName(input);
    setInput("");
  };

  if (isLoading) {
    return <div className="bg-zinc-500 min-h-screen">Loading........</div>;
  }

  if (!isSuccess) {
    return <NotValid />;
  }

  return (
    <>
      <div className="search flex relative mt-10 mb-6 shadow-sm">
        <form
          onSubmit={handleSubmit}
          className="search w-full flex relative mt-10 mb-6 shadow-sm"
          action=""
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=" pl-10 shadow-lg"
            placeholder="Your Github Username here..."
          />
          <Button
            type="submit"
            className="absolute bg-transparent text-black right-0 top-0 bottom-0 border-l hover:text-white hover:bg-zinc-600 border-black"
          >
            Search
          </Button>
        </form>
      </div>
      {gitUserName ? (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg mt-10 overflow-hidden">
          {/* Avatar */}
          <div className="flex justify-center bg-gray-500 py-6">
            <img
              className="rounded-full w-32 h-32 border-4 border-white shadow-md"
              src={data?.avatar_url}
              alt="User Avatar"
            />
          </div>

          {/* User Info */}
          <div className="text-center py-6 px-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {data?.name || "No Name available"}
            </h2>
            <p className="text-sm text-gray-600">@{data?.login}</p>
            <p className="mt-2 text-gray-600 text-base">
              {data?.user_view_type || "No bio available"}
            </p>
          </div>

          {/* Footer with Followers and Repo Link */}
          <div className="flex justify-between items-center px-4 py-4 bg-gray-50">
            <a
              href={data?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View Repositories
            </a>
            <div className="text-sm text-gray-600">
              <span>{data?.followers}</span> Followers
            </div>
          </div>
        </div>
      ) : (
        <SkeletonUi />
      )}
    </>
  );
};

export default GithubPage;
