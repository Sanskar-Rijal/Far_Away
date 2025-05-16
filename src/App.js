import React from "react";

export default function App() {
  //checking the new item in console

  const [items, setItems] = React.useState([]);

  function handlePack(id) {
    setItems((it) =>
      it.map((items) => {
        if (items.id === id) {
          return { ...items, packed: !items.packed }; //returning object items by overriding packed property
        }
        return items;
      })
    );
  }

  function handleAddItem(item) {
    setItems((it) => [...it, item]); //it is the previous state , using spread operator
    console.log(setItems);
  }

  //delete item by clicking cross
  function handleDeleteItem(id) {
    setItems((it) => it.filter((item) => item.id !== id)); //when item.id==id then it will not be included in the new array
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onCheckedBox={handlePack}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form(props) {
  //to use control elements we follow three steps
  //step 1: create a state
  //step 2: use the state to the input element that we want to control
  //step 3: update the state when the input changes
  const [description, setDescription] = React.useState("");

  const [selected, setSelected] = React.useState(1);

  const newItem = {
    id: Date.now(),
    description: description,
    selected: selected,
    packed: false,
  };

  //console.log(newItem);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    console.log(event);
    //saving the currently added item in the array
    props.onAddItems(newItem);
    setDescription("");
    setSelected(1);
  }

  return (
    //  pressing enter will also work if we use onSubmit on form
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

function PackingList(props) {
  return (
    <div className="list">
      <ul>
        {props.items.map((it) => (
          <Item
            items={it}
            key={it.id}
            onDeleteItems={props.onDeleteItems}
            onCheckedBox={props.onCheckedBox}
          />
        ))}
      </ul>
    </div>
  );
}

function Item(props) {
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

function Stats() {
  return (
    <footer className="stats">
      <em>
        YOu have addded abx items on your list and you already packed hehehe
      </em>
    </footer>
  );
}
