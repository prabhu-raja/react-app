import { MouseEvent } from 'react';

function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'Toronto'];
  const handleEvent = (evt: MouseEvent) => console.log(evt);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleEvent}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
