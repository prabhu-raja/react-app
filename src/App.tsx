import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
// import ListGroup from './components/ListGroup/ListGroup';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';
import './App.css';

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  const items = ['New York', 'San Francisco', 'Tokyo', 'Toronto'];
  const handleSelectItem = (item: string) => {
    console.log('🙋‍♂️', item);
  };

  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}></ListGroup>
    </div>
    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => setAlertVisibility(false)}>
    //       Hello <span>World!</span>
    //     </Alert>
    //   )}
    //   <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    // </div>
  );
}

export default App;
