import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyButton from './MyButton';
import MySection from './MySection';
import MyComponent from './MyComponent';
import MyList from './MyList';
import MyInput from './MyInput';
import Exercise4 from './Exercise4';
import Exercise4_2 from './Exercise4_2';
import Exercise4_3 from './Exercise4_3';


//Exercise 4.1
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





//Exercise 0.4 array & object
/* const array = ["First", "Second", "Thrid"];

const object = {
  first : 1,
  second : 2,
  third : 3
}; */

//Exercise 1.2
/* const root = ReactDOM.createRoot(document.getElementById('root'));

const appState = {
  text: "My Button",
  disable: true,
  items: ["First", "Second", "Third"],
};

function render(props){
  root.render(
    <main>
    <MyButton text={props.text} disable={props.disable}/>
    <MyList items={props.items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disable = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000); */

//Exercise 1.3
/* const root = ReactDOM.createRoot(document.getElementById('root'));

function render({ second }) {
  root.render(
    <main>
      <MyButton/>
      <MyButton text={second.text} disabled={second.disabled} />
    </main>
  );
}

render({
	second:{
		text:"Second Button",
		disabled: true,
	},
}); */

//Exercie 2.1
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); */

//Exercise 2.2
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
); */

//Exercise 2.3
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);*/

//Exercise 3
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyInput />
); */

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

 /* <React.StrictMode>
    <App />
  </React.StrictMode>*/
  //Exercise 0
  /*
  <p>
    Hello, <strong>JSX</strong>
  </p>*/

  //Exercise 0.1
  /*
  <div>
  <button />
  <code />
  <input />
  <label />
  <p />
  <pre />
  <select />
  <table />
  <ul />
  </div> */

  //Exercise 0.2
  /*
  <section>
  <header>
    <hl>A Header</hl>
  </header>
  <nav>
    <a href="item">Nav Item</a>
  </nav>
  <main>
    <p>The main content...</p>
  </main>
  <footer>
    <small>&copy; 2021</small>
  </footer>
</section> */

  //Exercise 0.3
/*
  <MySection>
  <MyButton>
    My Button text
  </MyButton>
</MySection>*/
 
//Exercise 0.4
/*
<section>
<h1>Array</h1>
<ul>
  {array.map((i) => {
    <li key={i}>{i}</li>
  })}
</ul>

<h1>Object</h1>
<ul>
  {Object.keys(object).map((i) =>(
    <li key={i}>
      <strong>{i}: </strong>
      {object[i]}
    </li>
  ))}
</ul>

</section> */

//Exercise 1.0
/* <MyComponent/> */

//Exercise 1.1
/* <MyComponent/> */

//);
