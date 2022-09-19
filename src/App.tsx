import { Counter } from "./components/Counter";
import { FormHandling } from "./components/FormHandling";
import { Header } from "./components/Header";
import { Section } from "./components/Section";

export function App() {
  const fruits = ["apple", "orange", "banana"];
  return (
    <>
      <Header />
      <Section className="bg-yellow-200">
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
