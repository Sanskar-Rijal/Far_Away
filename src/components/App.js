import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function ClearList() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all Items?"
    );
    if (confirmDelete) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onCheckedBox={handlePack}
        clear={ClearList}
      />
      <Stats items={items} />
    </div>
  );
}
