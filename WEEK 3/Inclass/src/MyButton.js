//Exercise 0.3
/* import React from 'react';

class MyButton extends React.Component {
    render(){
        return <button>{this.props.chidlren}</button>;
    }
}

export default MyButton; */

//Exercise 1.2
/* import * as React from 'react';


class Mybutton extends React.Component {
    render() {
        const {disable, text} = this.props;
        return <button disabled= {disable}>{text}</button>
    }
}

export default Mybutton; */

//Exercise 1.3
/* import React from 'react';

const MyButton = ({disabled, text}) => (
	<button disabled = {disabled}>{text} </button>
);

MyButton.defaultProps = {
	text: "My Button",
	disabled: false,
};

export default MyButton; */