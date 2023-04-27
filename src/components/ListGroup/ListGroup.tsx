import { useState } from 'react';
import styles from './ListGroup.module.css';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log('😀', styles);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={styles['list-group']}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
