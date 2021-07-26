import BarnOwl from "../assets/barn-owl.png";
import EuropeanEagleOwl from "../assets/european-eagle-owl.png";
import LittleOwl from "../assets/little-owl.png";
import LongEaredOwl from "../assets/long-eared-owl.png";
import ShortEaredOwl from "../assets/short-eared-owl.png";
import TawnyOwl from "../assets/tawny-owl.png";
import SnowyOwl from "../assets/snowy-owl.png";

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

        else if (props.name === "Snowy Owl") {
            return owlImage = SnowyOwl;
        }
    }

    getImage();

    return (
        <div className="owl">
            <img className="owl-pic" src={owlImage} alt={props.name}/>
            <h3>{props.name}</h3>
            <p id="sci-name">{props.sciName}</p>
            <p id="date-time">{props.date}</p>
            <p id="location">{props.location}</p>
        </div>
    )
};

export default Sighting;