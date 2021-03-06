const BASE_URL = "http://127.0.0.1:8000/collection/";
const LOGIN_API = "http://127.0.0.1:8000/login/";
const ADD_VINYL_API = "http://127.0.0.1:8000/add-vinyl/";
const DELETE_VINYL_API = "http://127.0.0.1:8000/delete-vinyl/";
const VINYL_DETAILS_API = "http://127.0.0.1:8000/detail/";

// base function for fetching data from the server
const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      let data = await response.json();
      return await data;
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    alert(e);
    return null;
  }
};

// fetch user vinyls
const fetchVinyls = async (email) => {
    if (email) {
        return await tryCatchFetch(`${BASE_URL}?email=${email}`);
    } else {
        console.log("no email")
    };
};

// fetch user
const fetchUser = async (email = null) => {
  if (email) {
    return await tryCatchFetch(`${LOGIN_API}?email=${email}`);
  }
  return await tryCatchFetch(LOGIN_API);
};

// creates new user
const addUser = async (userData) => {
  try {
    let res = await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let data = await res.json();
    return data;
  } catch (e) {
    alert(e);
  }
};

// creates new vinyl
const addVinyl = async (user, vinylData) => {
  try {
    let res = await fetch(`${ADD_VINYL_API}${user}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vinylData),
    });
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e)
  };
};

// fetch vinyl details
const getVinylDetails = async (vinylID) => {
  let res = await fetch(`${VINYL_DETAILS_API}${vinylID}`);
  let data = await res.json();
  return data;
}

// deletes vinyl
const deleteVinyl = async (vinyl_id) => {
  try {
    let res = await fetch(`${DELETE_VINYL_API}${vinyl_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}


const exportItems = {
  fetchVinyls,
  addUser,
  fetchUser,
  addVinyl,
  deleteVinyl,
  getVinylDetails
};

export default exportItems;
