
const Profile = ({props}) => {
    return (
        <div>
            <h2>{props.name}'s Profile</h2>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
};

export default Profile;
