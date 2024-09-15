import './App.css';
import { Button } from 'provider/Button';

const App = () => {
  return (
    <div className="content">
      <h1>Shell</h1>
      <div>
        <Button
          primary
          label='This button is from the provider'
        />
      </div>
    </div>
  );
};

export default App;