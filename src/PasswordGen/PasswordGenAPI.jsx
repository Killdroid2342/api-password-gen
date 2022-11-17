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
    <div className='flex flex-col items-center justify-center my-auto h-screen text-center '>
      <div className=' border-2 border-white flex flex-col rounded-md p-12 '>
        <h1 className='pb-8 text-2xl'>Password Generator</h1>
        <p className='border-2 border-white p-2 rounded-xl'>{password}</p>
        <button
          onClick={getRandomPassword}
          className='border-2 border-white rounded-xl p-2 mt-8'
        >
          Generate Password
        </button>
        <button
          className='border-2 border-white rounded-xl p-2 mt-8'
          onClick={savePassword}
        >
          Copy Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
