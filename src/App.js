import React, { useReducer } from 'react';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 10
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 12.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 8
  }
];

// --------------------------------------------
// !!! DO NOT MODIFY ABOVE THIS LINE !!!
// --------------------------------------------

// YOUR MAY ADD ANY ADDITIONAL FUNCTIONS HERE IF YOU NEED, NAMELY THE computeTotal(), etc.

function reducer(state, action) {
  switch(action.type) {
    // YOUR CODE HERE
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, []);

  // YOUR CODE HERE

// --------------------------------------------
// !!! DO NOT MODIFY BELOW THIS LINE !!!
// --------------------------------------------
  return(
    <>
      <div>
        Total Items in Shopping Cart: {state.length}
      </div>
      <div>Total Cost: ${computeTotal(state)}</div>

      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span>{product.emoji}</span>
            </div>
            <div>Price ${product.price}</div>
            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}
export default App;