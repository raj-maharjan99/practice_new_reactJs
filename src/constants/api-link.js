// localstorage set item
export const setToLocal = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getFromLocal = () => {
  const user = localStorage.getItem("user");

  return user === null ? null : JSON.parse(user);
};

export const clearLocal = () => {
  localStorage.removeItem("user");
};

// userAUth base url coming from backend

export const baseUrl = "http://192.168.1.35:3000";
// git hub api

// https://api.github.com/users/raj-maharjan99

export const gitHubUrl = "https://api.github.com";
