import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Item from "./index";
import { Vault } from "@iiif/vault";
import { CanvasNormalized } from "@iiif/presentation-3";

const Dev: React.FC = () => {
  const [items, setItems] = useState<CanvasNormalized[]>([]);
  const vault = new Vault();

  useEffect(() => {
    vault
      .loadManifest("http://127.0.0.1:8080/fixtures/palouse.json")
      .then((response) => setItems(response ? vault.get(response.items) : []));
  }, []);

  const handleCallback = (id) => console.log(`click`, id);

  if (!items) return <></>;

  return (
    <>
      <h3>Composable Method (w/ children)</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item.Root item={item} callback={handleCallback}>
              <Item.Thumbnail />
              <Item.Label />
              <Item.Summary />
            </Item.Root>
          </li>
        ))}
      </ul>

      <h3>Simple Method (default figure)</h3>
      {items.map((item) => (
        <Item item={item} callback={handleCallback} key={item.id} />
      ))}
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<Dev />);
