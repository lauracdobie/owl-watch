function Sighting(props) {
    return (
        <li>
            <p>Name: {props.name}</p> 
            <p>Location: {props.location}</p>
            <p>Date: {props.date}</p>
        </li>
    )
};

export default Sighting;