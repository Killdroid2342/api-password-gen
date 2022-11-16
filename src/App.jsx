import react from 'react';
import PasswordGenAPI from './PasswordGen/PasswordGenAPI';

function App() {
  document.title = 'API Password Generator';
  return (
    <div>
      <PasswordGenAPI />
    </div>
  );
}

export default App;
