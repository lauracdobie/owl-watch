function Sighting(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.date}</p>
        </div>
    )
};

export default Sighting;