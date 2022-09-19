import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { AcademicCapIcon, BeakerIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";

export function App() {
  // const [count, setCount] = useState<number>(0);

  // useEffect(() => {
  //   if (count) {
  //     localStorage.setItem("count", count.toString());
  //   }
  // }, [count]);

  // useEffect(() => {
  //   const countFromStorage = localStorage.getItem("count") || "0";
  //   setCount(parseInt(countFromStorage));
  // }, []);

  // function increment() {
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   if (count === 0) return;
  //   setCount(count - 1);
  // }

  // function reset() {
  //   setCount(0);
  //   localStorage.setItem("count", "0");
  // }

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
      <Header />
      <Section className="bg-yellow-200 gap-8 flex-col">
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
      </Section>
      <Section className="bg-red-200">
        {/* <Button handleClick={decrement}>-</Button>
        <span className="font-bold text-3xl">{count}</span>
        <Button handleClick={increment}>+</Button>
        <Button handleClick={reset}>Reset</Button> */}
      </Section>
      <Section className="bg-blue-200">
        <AcademicCapIcon className="h-12 w-12 text-blue-600" />
        Section 3
      </Section>
    </>
  );
}
