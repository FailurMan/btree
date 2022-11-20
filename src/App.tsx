import React, { useEffect, useState } from 'react';
//@ts-ignore
import axios from 'axois'
const App: React.FC = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'X-Requested-With': 'XMLHTttpRequest',
      },
      responseType: 'json'
    }).then(res => {
      console.log(res)
      setTitle(res)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
