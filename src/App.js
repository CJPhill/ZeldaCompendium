import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const encodedName = encodeURIComponent(name.toLowerCase());
    const url = `https://botw-compendium.herokuapp.com/api/v2/entry/${encodedName}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [name]);

  return (
    <div className="App">
      <Title text="Zelda Compendium" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
