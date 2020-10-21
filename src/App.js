import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';
// import axios
const axios = require('axios').default;

function App() {
	// Url
	const url = 'https://jsrpartymemberbackend.herokuapp.com';
	// Empty partyMember for Form
	const emptyPartyMember = {
		name: '',
		weapon: '',
		race: '',
		armor: '',
		hidden: '',
		img: '',
	};
	// State lives here
	const [partyMember, setPartyMember] = React.useState([]);
	const [selectPartyMember, setSelectPartyMember] = React.useState(
		emptyPartyMember
	);
	// axios to fetch
	// const getPartyMember = () => {
	// 	axios.get('https://jsrpartymemberbackend.herokuapp.com/partymember/').then(function (response) {
	// 		setPartyMember(response);
	// 	});
	// };
	const getPartyMember = () => {
		fetch(url + '/partymember/')
			.then((response) => response.json())
			.then((data) => {
				setPartyMember(data);
			});
	};
	React.useEffect(() => {
		getPartyMember();
    }, []);
    console.log(partyMember)
	// handle for create
	const handleCreate = (newPartyMember) => {
		axios
			.post(url + '/partymember/', {
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newPartyMember),
			})
			.then((response) => getPartyMember);
	};
	//handleUpdate to update a dog when form is clicked
	const handleUpdate = (member) => {
		axios
			.put(url + '/partymember/' + member._id, {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(member),
			})
			.then((response) => getPartyMember());
	};
	// handle for remove party member
	const removePartyMember = (member) => {
		axios
			.delete(url + '/partymember/' + member.name)
			.then((response) => getPartyMember);
	};
	// default
	const selectMember = (member) => {
		setSelectPartyMember(member);
	};
	return (
		<div className='App'>
			<h1>Your Fellowship</h1>
			<Link to='/create'>
				<button>Add Party Member</button>
			</Link>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={(rp) => (
							<Display
								{...rp}
								partyMember={partyMember}
								selectMember={selectMember}
								removeMember={removePartyMember}
							/>
						)}
					/>
					<Route
						exact
						path='/create'
						render={(rp) => (
							<Form
								{...rp}
								label='create'
								member={emptyPartyMember}
								handleSubmit={handleCreate}
							/>
						)}
					/>
					<Route
						exact
						path='/edit'
						render={(rp) => (
							<Form
								{...rp}
								label='update'
								member={selectPartyMember}
								handleSubmit={handleUpdate}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
