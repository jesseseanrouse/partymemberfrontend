import React from 'react';

const Form = (props) => {
	// state lives here
	const [formData, setFormData] = React.useState(props.member);
	// functions
	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(formData);
		props.history.push('/');
	};
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='weapon'
				value={formData.weapon}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='race'
				value={formData.race}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='armor'
				value={formData.armor}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='hidden'
				value={formData.hidden}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='img'
				value={formData.img}
				onChange={handleChange}
			/>
			<input type='submit' value={props.label} />
		</form>
	);
};

export default Form;
