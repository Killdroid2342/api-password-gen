import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator 2.0';
  const [password, setPassword] = useState([{}]);

  let API =
    'https://passwordinator.herokuapp.com/generate?num=true&caps=true&char=true&len=8';

  const getRandomPassword = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPassword(data);
      });
  };
  // console.log(getRandomPassword);
  const savePassword = () => {
    navigator.clipboard.writeText(password);
    alert(`Your Password Is: ${password}`);
  };
  return (
    <div className='flex flex-col items-center justify-center my-auto h-screen text-center '>
      <div className=' border-2 border-white flex flex-col rounded-md p-12 '>
        <h1 className='pb-8 text-2xl'>Password Generator 2.0</h1>
        {typeof password === 'undefined' ? (
          <p>Waiting For Password...</p>
        ) : (
          <p className='border-2 border-white p-2 rounded-xl'>
            {password.data}
          </p>
        )}
        <button
          onClick={() => getRandomPassword()}
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
