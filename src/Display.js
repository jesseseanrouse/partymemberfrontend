import React from 'react';

const Display = (props) => {
    console.log(props)
    const {partyMember} = props
    const loaded = () => (
			<div style={{ textAlign: 'center' }}>
				{partyMember.map((member) => (
					<article>
						<img src={member.img} />
						<h2>{member.name}</h2>
						<h3>{member.weapon}</h3>
						<h3>{member.race}</h3>
						<h3>{member.armor}</h3>
						<h3>{member.hidden}</h3>
						<button
							onClick={() => {
								props.selectMember(member);
								props.history.push('/edit');
							}}>
							Edit
						</button>
						<button
							onClick={() => {
								props.removePartyMember(member);
							}}>
							Remove
						</button>
					</article>
				))}
			</div>
        );
        const loading = <h1>Loading...</h1>;
    return partyMember.length > 0 ? loaded() : loading;
}

export default Display