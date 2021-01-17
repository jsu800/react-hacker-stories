import React from 'react';

const App = () => {
  return (
    <div>
      <Title name="React" />
      <SubTitle />
    </div>
  );
};

const Title = props => (
  <h1>{props.name}</h1>
);

function SubTitle() {
  return <p>A JavaScript library for building user interfaces.</p>;
}

export default App;
