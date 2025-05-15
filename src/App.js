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
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you Need for you Trip?</h3>
      <select>
        {/*Array(25) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, … ] */}
        {Array.from({ length: 25 }, (currentvalue, index) => index + 1).map(
          (it) => (
            <option value={it} key={it}>
              {it}
            </option>
          )
        )}
      </select>
      <input type="text" placeholder="Item..." />
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
