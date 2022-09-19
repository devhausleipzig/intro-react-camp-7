import { useState } from "react";

export function FormHandling() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName) {
      setError("Please provide a first name");
    } else {
      const normalizedName = firstName.split(" ").join("-");
      setFirstName(normalizedName);
      console.log({ firstName, lastName });
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label>
          First Name
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(event) => {
              console.log(event.target.value);
              setError(null);
              setFirstName(event.target.value);
            }}
          />
        </label>
        <label>
          Last Name
          <br />
          <input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-slate-700 text-slate-50 p-2">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify({ firstName, lastName }, null, 2)}</pre>
    </>
  );
}
