# React Checkbox

A checkbox component with React

## Properties

### Class Component

|Name|Description|Type|
|:---|:----------|:---|
|prefixCls|The prefix classname of this checkbox|String|
|className|The classname of this checkbox|String|
|name|The name of this checkbox|String|
|checked|Status of checked - [0,1,2]|Number|
|defaultChecked|Status of default checked - [0,1,2]|Number|
|onChange|Call a method for an onChange Event|Function|

### Hooks Function

|Name|Description|Type|
|:---|:----------|:---|
|name|The name of this checkbox|String|
|type|Type of this checkbox|String|
|checked|Status of checked|Boolean|
|onChange|Call a method for an onChange Event|Function|

## Example

### Class Component

```JS
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
```

### Hooks Function

```JS
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
```