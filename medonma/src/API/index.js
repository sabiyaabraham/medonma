// import { notify } from 'your-notify-library'; // Replace 'your-notify-library' with the actual import statement for your notify library

const api = (function () {
  const baseUrl = "https://api.medonma.me/api/v1/"; // Set your default API base URL

  // Function to get the token from local storage
  const getToken = () => {
    return localStorage.getItem("token");
  };

  // Function to make requests
  const request = async (method, path, data) => {
    var url = `${baseUrl}${path}`;
    const token = getToken();
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    let options = {
      method,
      headers,
    };

    if (method !== "GET") {
      options.body = JSON.stringify(data);
    } else if (data) {
      // If it's a GET request and there are data, encode it to a URL string
      const queryParams = new URLSearchParams(data).toString();
      options = {
        ...options,
        method,
        headers,
      };
      url = `${baseUrl}${path}?${queryParams}`;
    }

    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error("Request failed:", error.message);
      //   notify.error(error.message); // Display error message using notify
      // throw { error: true, message: error };
      return { error: true, message: error.message };
    }
  };

  // Helper functions for each HTTP method
  const get = (path, data) => request("GET", path, data);
  const put = (path, data) => request("PUT", path, data);
  const post = (path, data) => request("POST", path, data);
  const del = (path, data) => request("DELETE", path, data);

  return {
    get,
    put,
    post,
    del,
  };
})();

export default api;
