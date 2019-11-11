import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Method 2 - Hooks functions

import CheckboxNew from './components/checkboxNew';

function App() {
	const [checkedItems, setCheckedItems] = useState({});

	const handleChange = event => {

		setCheckedItems({
			...checkedItems,
			[event.target.name]: event.target.checked
				});

		console.log("checkedItems: ", checkedItems);

	};

	const checkboxes = [
		{
			name: "test--box--1",
			key: "test--box--one",
			label: "Test Box 1"
		},
		{
			name: "test--box--2",
			key: "test--box--two",
			label: "Test Box 2"
		}
	];

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<div>
					{checkboxes.map(item => (
						<div>
							<label key={item.key}>
								<CheckboxNew
									name={item.name}
									checked={checkedItems[item.name]}
									onChange={handleChange}
								/>
								{item.name}
							</label>
						</div>
					))}
					</div>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);

}

export default App;

// Method 1 - Class Component

/*

import Checkbox from './components/checkbox';

function onChange(e) {
	console.log('Checkbox checked:', (e.target.checked));
}

class App extends React.Component {
	state = {
		disabled: false,
	};

	toggle = () => {
		this.setState((state) => ({
			disabled: !state.disabled,
		}));
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
					<label>
						<Checkbox
							defaultChecked
							onChange={onChange}
							disabled={this.state.disabled}
						/>
						<span>test</span>
					</label>
				</section>
				<footer className="App-footer">
					(c) Copyright - Mike Ludemann
				</footer>
			</div>
		);
	}
}

*/

// ----------------------------------
