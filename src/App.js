import React from 'react';

// const App = () => {
//   const dom = <h2 className="foo">Hi!</h2>
//   return (
//     <>
//     <h1>
//       Hello, world!
//     </h1>
//     {dom}
//     <label htmlFor="bar">bar</label>
//     <input id="bar" onClick={() => console.log('hello world')}/>
//     <input onChange={() => console.log('hello world')}/>
//     </>
//   );
// }

const App = () => {
    return (
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>
    )
}

const Cat = () => {
    return <div>Meow!</div>
}

export default App;
