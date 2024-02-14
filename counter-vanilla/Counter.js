import { configureStore } from '@reduxjs/toolkit';

// write function here
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Use configureStore to create the store
const store = configureStore({
  reducer: counterReducer
});

// setup variables and render function here
var valueEl = document.getElementById('value');

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render()
store.subscribe(render)

// setup document tags here
document.getElementById('increment')
  .addEventListener('click', function() {
    store.dispatch({ type: 'INCREMENT' })
  })

document.getElementById('decrement')
.addEventListener('click', function() {
  store.dispatch({ type: 'DECREMENT' })
})

document.getElementById('incrementIfOdd')
.addEventListener('click', function() {
  if (store.getState() % 2 !== 0) {
    store.dispatch({ type: 'INCREMENT' })
  }
})

document.getElementById('incrementAsync')
.addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch({ type: 'INCREMENT' })
  }, 1000)  // asynchronously wait for one second to increment by 1
})
