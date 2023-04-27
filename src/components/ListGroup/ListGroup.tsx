import { useState } from 'react';
// import './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  isActive: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => props.isActive ? 'blue' : 'none'};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            isActive={index === selectedIndex}
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }}>
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
