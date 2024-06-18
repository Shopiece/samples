"use client"

import { postAction } from "@/app/action";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

async function getToken(clientId: string, email: string, password: string) {
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

function Button({ clientId, email, password, handleResponse }: any) {
  const status = useFormStatus();
  const handleInputChange = (res: any) => {
    handleResponse(res);
  };

  return (
    <button className="button" type="submit" disabled={status.pending} onClick={async (e) => {
      e.preventDefault();
      const res = await getToken(clientId, email, password);
      handleInputChange(res);
    }}>
      {status.pending ? "Post..." : "Post"}
    </button>
  )
}

export default function Home() {
  // const [result, dispatch] = useFormState(postAction, {});
  const [clientId, setClientId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setRes] = useState('');

  const handleResponse = (res: any) => {
    console.log(res);
    setRes(res);
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Obtaining an authentication token for shopiece.</h1>
      <section className="pt-24">
        <form className="flex flex-col w-96 mx-auto gap-8">
          <label className="w-full flex justify-between">
            ClientId
            <input type="text" name="clientId" onChange={(e) => setClientId(e.target.value)} />
          </label>
          <label className="w-full flex justify-between">
            E-Mail
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="w-full flex justify-between">
            Password
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>

          <Button clientId={clientId} email={email} password={password} handleResponse={handleResponse} />
        </form>

        <div className="mt-20 w-[800px] whitespace-break-spaces break-all">{JSON.stringify(response)}</div>
      </section>
    </main>
  );
}
