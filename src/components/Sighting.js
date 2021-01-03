function Sighting(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.sciName}</p>
            <p>{props.location}</p>
            <p>{props.date}</p>
            <p>Number of owls: {props.number}</p>
        </div>
    )
};

export default Sighting;