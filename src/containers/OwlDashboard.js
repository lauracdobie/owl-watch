import {useState, useEffect} from "react";
import RecentObservationsList from "../components/RecentObservationsList";
import {myKey} from "./secrets";

function OwlDashboard() {
    const [recentObservations, setRecentObservations] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", myKey);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    useEffect(() => {
        let myPromise = fetch("https://api.ebird.org/v2/data/obs/GB-SCT/recent?back=30", requestOptions)
        myPromise.then(response => response.json())
        .then(data => {
            console.log("Getting data...")
            console.log(data)
            setRecentObservations(data);
            
        })
        .catch(error => console.log("error", error))

    }, []);

    return (
    <>
        <RecentObservationsList recentObservations={recentObservations}/>
    </>
 );
}

export default OwlDashboard;