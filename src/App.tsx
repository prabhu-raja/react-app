import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
      <Button onClick={() => console.log('Clicked')}>My button</Button>
    </div>
  );
}

export default App;
