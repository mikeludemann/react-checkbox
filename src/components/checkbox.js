import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

class Checkbox extends Component {

	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,
		name: PropTypes.string,
		id: PropTypes.string,
		type: PropTypes.string,
		defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
		checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
		disabled: PropTypes.bool,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
		onClick: PropTypes.func,
		tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		readOnly: PropTypes.bool,
		autoFocus: PropTypes.bool,
		value: PropTypes.any,
	};

	static defaultProps = {
		prefixCls: 'dynamic-checkbox',
		className: '',
		style: {},
		type: 'checkbox',
		defaultChecked: false,
		onFocus() {},
		onBlur() {},
		onChange() {},
	};

	constructor(props) {

		super(props);

		const checked = 'checked' in props ? props.checked : props.defaultChecked;

		this.state = {
			checked,
		};

	}

	static getDerivedStateFromProps(props, state) {

		if ('checked' in props) {

			return {
				...state,
				checked: props.checked,
			};

		}

		return null;

	}

	focus() {

		this.input.focus();

	}

	blur() {

		this.input.blur();

	}

	handleChange = (e) => {

		const { disabled, onChange } = this.props;

		if (disabled) {

			return;

		}

		if (!('checked' in this.props)) {

			this.setState({
				checked: e.target.checked,
			});

		}

		if (onChange) {

			onChange({
				target: {
					...this.props,
					checked: e.target.checked,
				},
				stopPropagation() {
					e.stopPropagation();
				},
				preventDefault() {
					e.preventDefault();
				},
				nativeEvent: e.nativeEvent,
			});

		}

	};

	saveInput = (node) => {

		this.input = node;

	}

	render() {

		const {
			prefixCls,
			className,
			style,
			name,
			id,
			type,
			disabled,
			readOnly,
			tabIndex,
			onClick,
			onFocus,
			onBlur,
			autoFocus,
			value,
			...others
		} = this.props;

		const globalProps = Object.keys(others).reduce((prev, key) => {

			if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {

				prev[key] = others[key];

				}

				return prev;

		}, {});

		const { checked } = this.state;
		const classString = classNames(prefixCls, className, {
			[`${prefixCls}-checked`]: checked,
			[`${prefixCls}-disabled`]: disabled,
		});

		return (
			<span className={classString} style={style}>
				<input
					name={name}
					id={id}
					type={type}
					readOnly={readOnly}
					disabled={disabled}
					tabIndex={tabIndex}
					className={`${prefixCls}-input`}
					checked={!!checked}
					onClick={onClick}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={this.handleChange}
					autoFocus={autoFocus}
					ref={this.saveInput}
					value={value}
					{...globalProps}
				/>
				<span className={`${prefixCls}-inner`} />
			</span>
		);

	}

}

polyfill(Checkbox);

export default Checkbox;
