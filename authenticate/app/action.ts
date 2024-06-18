"use server";

export async function postAction(prevData: any, formData: FormData) {
  const url = `https://stage.api.shopiece.io/login/user`
  const clientId = formData.get("clientId");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(`>>> postAction clientId, email, password`);
  console.log(clientId, email, password);

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    })
  });

  return response.json();
}
