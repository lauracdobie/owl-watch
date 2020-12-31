import {useState, useEffect} from "react";
import RecentObservationsList from "../components/RecentObservationsList";
import Sighting from "../components/Sighting";

function OwlDashboard() {
    const [recentObservations, setRecentObservations] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "qvm62q5vr67v");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    useEffect(() => {
        let myPromise = fetch("https://api.ebird.org/v2/data/obs/CA-QC/recent", requestOptions)
        myPromise.then(response => response.json())
        .then(data => {
            console.log("Getting data...")
            // console.log(data)
            setRecentObservations(data);
            // console.log(recentObservations);
            
        })
        .catch(error => console.log("error", error))
    }, []);

    return (
    <>
        <h2>Owl-related things will go in here</h2>
        <RecentObservationsList recentObservations={recentObservations}/>
        <Sighting />
    </>
 );
}

export default OwlDashboard;