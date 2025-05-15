import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  //to use control elements we follow three steps
  //step 1: create a state
  //step 2: use the state to the input element that we want to control
  //step 3: update the state when the input changes
  const [description, setDescription] = React.useState("");

  const [selected, setSelected] = React.useState(1);

  //checking the new item in console

  const newItem = {
    id: Date.now(),
    description,
    selected,
    packed: false,
  };

  console.log(newItem);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    console.log(event);
    setDescription("");
    setSelected(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you Need for you Trip?</h3>
      <select
        value={selected}
        onChange={(event) => {
          setSelected(Number(event.target.value));
        }}
      >
        {/*Array(25) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, … ] */}
        {Array.from({ length: 25 }, (currentvalue, index) => index + 1).map(
          (it) => (
            <option value={it} key={it}>
              {it}
            </option>
          )
        )}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(Event) => {
          setDescription(Event.target.value);
        }}
      />
      <button>ADD</button>
      {/* if i use onclick here and create
       function handleclick then it will work only when button is clicked, we want it to work when we press enter as welll */}
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((it) => (
          <Item item={it} key={it.id} />
        ))}
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li>
      <span
        style={{
          textDecoration: props.item.packed ? "line-through" : "none",
        }}
      >
        {props.item.quantity} {props.item.description}
      </span>
      <button>{props.item.packed ? "✅" : "❌"}</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        YOu have addded abx items on your list and you already packed hehehe
      </em>
    </footer>
  );
}
