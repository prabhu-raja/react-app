function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'Toronto'];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(evt) => console.log(item, evt)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
