import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('http://24.199.80.124:5000/api/dogs')
      .then(response => {
        setBreeds(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Razas de Perros</h1>
      <ul>
        {Object.keys(breeds).map(breed => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

