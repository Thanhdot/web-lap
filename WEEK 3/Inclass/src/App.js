import logo from './logo.svg';
import './App.css';
import Exercise4 from './Exercise4';
import Exercise4_2 from './Exercise4_2';
import Exercise4_3 from './Exercise4_3';
import Exercise4_4 from './Exercise4_4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
	  <Exercise4_4 />
    </div>
  );
}
export default App; 


//Exercise 2.1
/* import * as React from "react";

export default function App() {
	const [name] = React.useState("Adam");
	const [age] = React.useState(35);

	return (
		<>
			<p> Myname is {name} </p>
			<p>My age is {age} </p>
		</>
	);
}
 */
//Exercise 2.2
/* import * as React from "react";

function App() {
	const [name, setName] = React.useState("Adam");
	const [age, setAge] = React.useState(35);

	return (
		<>
		<section>
			<imput
				value = {name}
				onChange = {(e) => setName(e.target.value)}
		/>
		<p>My name is {name} </p>
		</section>
		<section>
			<imput
				type = "number"
				value = {age}
				onChange = {(e) => setAge(e.target.value)}
		/>
		<p>My age is {age} </p>
		</section>
		</>
	);
}

export default App; */

//Exercise 2.3
/* import * as React from 'react';

function App() {
	const [name, setName] = React.useState("Adam");
	const [age, setAge] = React.useState(35);


	return(
		<>
			<section>
				<input
					value={name}
					onChange={(e) =>setName(e.target.value)}
				/>
				<p>My name is {name}</p>
			</section>
			<section>
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<p>My age is {age}</p>
			</section>
		</>
	)
}

export default App; */