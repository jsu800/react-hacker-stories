import React from 'react';

const App = () => {
  return (
    <div>
      <Title YOUR_CODE_HERE />
      <SubTitle YOUR_CODE_HERE/>
    </div>
  );
};

const Title = props => (
  <h1>{YOUR_CODE_HERE}</h1>
);

function SubTitle() {
  return <p>A JavaScript library for building user interfaces.</p>;
}

export default App;
