import {useState, useEffect} from "react";
import RecentObservationsList from "../components/RecentObservationsList";
import {myKey} from "./secrets";
import LoadingOwl from "../components/LoadingOwl";

function OwlDashboard() {
    const [recentObservations, setRecentObservations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            setRecentObservations(data);
            setIsLoading(false);
        })
        .catch(error => console.log("error", error))

    }, []);

    if (isLoading === true) {
        return (
            <LoadingOwl />
        )
    }

    return (
    <>
        <RecentObservationsList recentObservations={recentObservations}/>
    </>
 );
}

export default OwlDashboard;