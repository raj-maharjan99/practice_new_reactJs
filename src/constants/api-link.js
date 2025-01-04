export const baseUrl = "http://192.168.1.35:3000";

// localstorage set item
export const setToLocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getFromLocal = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  return user === null ? null : JSON.parse(user);
};

// export const getFromLocal = () => {
//   const user = localStorage.getItem("user");
//   console.log(user);
//   if (user === null) {
//     return null; // If no user found, return null
//   }

//   try {
//     return JSON.parse(user); // Try to parse the JSON data
//   } catch (error) {
//     console.error("Error parsing user data from localStorage:", error);
//     return null; // Return null if JSON parsing fails
//   }
// };
export const clearLocal = () => {
  localStorage.removeItem("user");
};
