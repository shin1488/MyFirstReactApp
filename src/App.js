import React from 'react';

const catKind = [
  {
    id : 'oC',
    name : 'Ollie',
    image : 'https://www.dailydot.com/wp-content/uploads/2018/10/olli-the-polite-cat-800x400.jpg',
  },
  {
    id : 'bC',
    name : 'Butter Cat',
    image : 'https://preview.redd.it/jbpcreug9sb11.jpg?width=960&crop=smart&auto=webp&s=744a257c3fb19d1e92640a5053fe6adb339f6943',
  },
];

function Cat({ kind, picture }) {
  return (
    <div>
      <h2>I love Cats, {kind}</h2>
      <img src = {picture} alt = {kind} />
    </div>
  );
}

function App() {
  return (
    <div>
      {catKind.map(ki => (
      <Cat key = {ki.id} kind = {ki.name} picture = {ki.image} />
      ))}
    </div>
  )
}

export default App;