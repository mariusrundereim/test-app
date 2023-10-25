console.log(baseUrl);
export async function login(username, password) {
  const response = await fetch(`${baseUrl}, options`);
  const result = await response.json();
  console.log(result);
}
