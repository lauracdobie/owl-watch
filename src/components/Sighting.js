import BarnOwl from "../assets/barn-owl.png";
import EuropeanEagleOwl from "../assets/european-eagle-owl.png";
import LittleOwl from "../assets/little-owl.png";
import LongEaredOwl from "../assets/long-eared-owl.png";
import ShortEaredOwl from "../assets/short-eared-owl.png";
import TawnyOwl from "../assets/tawny-owl.png";

function Sighting(props) {
    let owlImage = null;
    const getImage = () => {
        if (props.name === "Barn Owl") {
            return owlImage = BarnOwl;
        }
        else if (props.name === "European Eagle Owl") {
            return owlImage = EuropeanEagleOwl;
        }
        else if (props.name === "Little Owl") {
            return owlImage = LittleOwl;
        }
        else if (props.name === "Long-eared Owl") {
            return owlImage = LongEaredOwl;
        }
        else if (props.name === "Short-eared Owl") {
            return owlImage = ShortEaredOwl;
        }
        else if (props.name === "Tawny Owl") {
            return owlImage = TawnyOwl;
        }
    }

    getImage();

    return (
        <div className="owl">
            <img className="owl-pic" src={owlImage} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.sciName}</p>
            <p>{props.location}</p>
            <p>{props.date}</p>
            <p>Number of owls: {props.number}</p>
        </div>
    )
};

export default Sighting;