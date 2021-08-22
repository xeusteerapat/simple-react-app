import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(0);

  const getRandomUser = () => {
    const randomId = Math.floor(Math.random() * 10 + 1);
    setUserId(randomId);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await res.json();

      setUser(data);
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>test</h1>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => getRandomUser()}
      >
        Get User
      </button>
      <div>
        <pre className='py-4 my-4 bg-green-50'>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
