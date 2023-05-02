import { useState } from 'react';
import produce from 'immer';
import { BsFillCalendarFill } from 'react-icons/bs';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button/Button';
import Like from './components/Like';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';
import Form from './Form';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/Expenseform';

export const categories = ['Groceries', 'Utilities', 'Entertainment'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Groceries' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Entertainment' },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm></ExpenseForm>
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={setSelectedCategory}></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
    </>
  );

  // return (
  //   <div>
  //     <Form />
  //   </div>
  // );
  // const [alertVisible, setAlertVisibility] = useState(false);
  // const items = ['New York', 'San Francisco', 'Tokyo', 'Toronto'];
  // const handleSelectItem = (item: string) => {
  //   console.log('🙋‍♂️', item);
  // };
  /*
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug1', isFixed: false },
    { id: 2, title: 'Bug2', isFixed: false },
  ]);

  const handleClick = () => {
    // setBugs(
    //   bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    // );
    setBugs(
      produce((draft) => {
        const bug = draft.find((bg) => bg.id === 1);
        if (bug) bug.isFixed = true;
      })
    );
  };
  */

  /*
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  const handleClear = () => {
    setCartItems([]);
  };
  */

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'John',
  //   },
  // });

  // const [pizza, setPizza] = useState({
  //   name: '🍕',
  //   toppings: ['🍄'],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: 'Product 1', quantity: 1 },
  //     { id: 2, title: 'Product 2', quantity: 1 },
  //   ],
  // });

  // const handleClick = () => {
  //   const updated = { ...game, player: { ...game.player, name: 'Bob' } };
  //   setGame(updated);
  //   const updated = [...pizza.toppings, '🥦', '🌶️'];
  //   setPizza({ ...pizza, toppings: updated });
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((itm) =>
  //       itm.id === 1 ? { ...itm, quantity: itm.quantity + 1 } : itm
  //     ),
  //   });
  // };

  // return (
  //   <>
  //     <ExpandableText>
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
  //       deserunt aut unde laboriosam soluta veniam, ea quos aliquid error cum?
  //       Sapiente quod dolorum perferendis praesentium cum architecto. Nam
  //       tenetur facere, id, tempore itaque quae nostrum dicta voluptatibus
  //       deserunt animi ex dolor earum nisi deleniti, amet velit repellat
  //       obcaecati ipsa optio dolores reprehenderit? Dolor accusantium ipsa iste
  //       unde sed mollitia ea iure alias nostrum beatae, ducimus ipsam eveniet
  //       dolorum debitis reprehenderit magnam assumenda minima, distinctio
  //       similique quibusdam fugit nobis, soluta optio! Error nam voluptatibus
  //       blanditiis laborum optio. Dolor quas eos magni quisquam veritatis optio
  //       debitis suscipit. Vel nulla magni deleniti quae.
  //     </ExpandableText>
  //   </>
  //   // <div>
  //   //   <button onClick={handleClick}>click</button>
  //   // </div>
  //   // <>
  //   //   <NavBar cartItemsCount={cartItems.length}></NavBar>
  //   //   <Cart cartItems={cartItems} onClear={handleClear}></Cart>
  //   // </>
  //   // <div>
  //   //   {bugs.map((bug) => (
  //   //     <p key={bug.id}>
  //   //       {bug.title} {JSON.stringify(bug.isFixed)}
  //   //     </p>
  //   //   ))}
  //   //   <button onClick={handleClick}>Update bug🐞</button>
  //   // </div>
  //   // <div>
  //   //   <BsFillCalendarFill color="red" size="40" />
  //   //   <ListGroup
  //   //     items={items}
  //   //     heading="Cities"
  //   //     onSelectItem={handleSelectItem}></ListGroup>
  //   //   <Button>My button</Button>
  //   //   <Like onClick={() => console.log('👍')}></Like>
  //   // </div>
  //   // ---
  //   // <div>
  //   //   {alertVisible && (
  //   //     <Alert onClose={() => setAlertVisibility(false)}>
  //   //       Hello <span>World!</span>
  //   //     </Alert>
  //   //   )}
  //   //   <Button onClick={() => setAlertVisibility(true)}>My button</Button>
  //   // </div>
  // );
}

export default App;
