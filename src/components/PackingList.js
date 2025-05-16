import React from "react";
import Item from "./Item";

export default function PackingList(props) {
  const [selected, setSelected] = React.useState("input");

  let ItemsTobeSorted;
  if (selected === "input") {
    ItemsTobeSorted = props.items;
  } else if (selected === "description") {
    ItemsTobeSorted = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (selected === "packed") {
    ItemsTobeSorted = props.items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {ItemsTobeSorted.map((it) => (
          <Item
            items={it}
            key={it.id}
            onDeleteItems={props.onDeleteItems}
            onCheckedBox={props.onCheckedBox}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={selected}
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        >
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => props.clear()}>Clear List</button>
      </div>
    </div>
  );
}
