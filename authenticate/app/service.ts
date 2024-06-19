"use server";

export async function getToken(clientId: string, email: string, password: string) {
  const url = `https://stage.api.shopiece.io/login/user`

  console.log(`>>> postAction clientId, email, password`);
  console.log(clientId, email, password);

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-Client': clientId,
    },
    body: JSON.stringify({
      email,
      password,
    })
  });

  return response.json();
}
