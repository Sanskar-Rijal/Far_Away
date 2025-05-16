export default function Stats(props) {
  if (props.items.length === 0) {
    return (
      <footer className="stats">
        <em>Start by adding some items on the list 🥹</em>
      </footer>
    );
  }
  const numItems = props.items.length;
  const numPacked = props.items.filter((it) => it.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are ready to go 🥳`
          : `You have ${numItems} items on your list and you have already packed
        ${numPacked} of them which is ${percentage}% of the total items.`}
      </em>
    </footer>
  );
}
