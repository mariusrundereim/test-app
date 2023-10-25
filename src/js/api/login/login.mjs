import { baseUrl } from "./baseurl.mjs";

export async function login({ email, pw }) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: pw,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const result = await response.json();
  return result;
}
