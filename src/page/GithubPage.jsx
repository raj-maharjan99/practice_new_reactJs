import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetGitHubUserQuery } from "@/slices/gitHubApi";

import React, { useState } from "react";
import SkeletonUi from "@/utils/SkeletonUi";

import NotValid from "@/utils/Not-Valid";
const GithubPage = () => {
  const [input, setInput] = useState("");
  // input github user list
  const [inputList, setInputList] = useState([]);

  const [gitUserName, setGitHubUserName] = useState(null);
  const { isLoading, data, isSuccess } = useGetGitHubUserQuery(gitUserName);

  // handle submit form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (input.trim() !== "") {
  //     const checkUser = inputList.map((item) => {
  //       item.includes(gitUserName);
  //     });
  //     console.log(checkUser);

  //     if (checkUser) {
  //       alert("User already exist");
  //       setInput("");
  //     } else {
  //       setGitHubUserName(input);
  //       setInputList([...inputList, input]);
  //       setInput("");
  //     }
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const userExists = inputList.some((item) => item === input); // some method give us only true or false it check only the content or data we provide inside given array.
      console.log(userExists);
      if (userExists) {
        alert("User already exists");
        setInput(""); // Reset the input field
      } else {
        setGitHubUserName(input);
        setInputList([...inputList, input]);
        setInput(""); // Reset the input field
      }
    }
  };
  const removeUser = (users, index) => {
    const updatedUser = inputList.filter((user, i) => i !== index);
    setInputList(updatedUser);
  };
  const selectUser = (users) => {
    setGitHubUserName(users);
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
            className=" pl-10  py-4 shadow-lg"
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
      {/* user list */}
      <div className="flex flex-wrap gap-4">
        {inputList.map((user, index) => {
          return (
            <Button key={index}>
              {" "}
              {user.toUpperCase()}{" "}
              <span onClick={() => selectUser(user)}>✅</span>{" "}
              <span onClick={() => removeUser(user, index)}>X</span>
            </Button>
          );
        })}
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
