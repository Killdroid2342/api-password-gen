import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('Click Button To Generate Password');

  const getRandomPassword = () => {};
  const savePassword = () => {
    navigator.clipboard.writeText(password);
    alert(`This is the password that you have copied: ${password}`);
  };
  return (
    <div className='flex flex-col items-center justify-center my-auto h-screen'>
      <div className=' border-2 border-white flex flex-col'>
        <h1 className=''>Password Generator</h1>
        <p className='border-2 border-white'>{password}</p>
        <button
          onClick={getRandomPassword}
          className='border-2 border-white rounded-md'
        >
          Generate Password
        </button>
        <button
          className='border-2 border-white rounded-md'
          onClick={savePassword}
        >
          Copy Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
