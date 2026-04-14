
const Guest = ({name = "Guest", room = "Standard"}) => {
	return (
		<div>
			<h2>Welcome, {name}!</h2>
			<p>Booked room: {room}</p>
			<p>We hope you enjoy your stay!</p>
		</div>
	);
};
	
export default Guest;