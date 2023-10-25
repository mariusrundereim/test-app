import { baseUrl } from "./baseurl.mjs";

export async function login(username, password) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(`${baseUrl}`, options);
  const result = await response.json();
  console.log(result);
  return result;
}
login();
