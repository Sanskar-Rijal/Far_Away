import React from "react";

export default function Item(props) {
  return (
    <li>
      <input
        type="checkbox"
        value={props.items.packed}
        id={props.items.id}
        onChange={() => props.onCheckedBox(props.items.id)}
      />
      <span
        style={{
          textDecoration: props.items.packed ? "line-through" : "none",
        }}
      >
        {props.items.selected} : {props.items.description}
      </span>
      <button
        onClick={() => {
          props.onDeleteItems(props.items.id); //if we don't use ()=> react will call the function immediately , which we don't want
        }}
      >
        {props.items.packed ? "✅" : "❌"}
      </button>
    </li>
  );
}
