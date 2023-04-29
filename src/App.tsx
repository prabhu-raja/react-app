import { useState } from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button/Button';
import Like from './components/Like';
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
      <Button>My button</Button>
      <Like onClick={() => console.log('👍')}></Like>
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
