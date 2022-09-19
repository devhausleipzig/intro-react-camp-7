import { Link } from "react-router-dom";
import { Counter } from "../components/Counter";
import { FormHandling } from "../components/FormHandling";
import { Section } from "../components/Section";

export function Home() {
  const fruits = ["apple", "orange", "banana"];
  return (
    <>
      <Section className="bg-yellow-200">
        <Link to="/about">About</Link>
        <ul className="flex flex-col gap-2">
          {fruits.map((fruit) => (
            <li key={fruit} className="bg-slate-700 text-slate-50 p-2">
              {fruit}
            </li>
          ))}
        </ul>
      </Section>
      <Section className="bg-red-200 gap-8">
        <Counter />
      </Section>
      <Section className="bg-blue-200 gap-8 flex-col">
        <FormHandling />
      </Section>
    </>
  );
}
