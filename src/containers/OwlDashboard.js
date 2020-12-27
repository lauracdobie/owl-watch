import {useState, useEffect} from "react";

function OwlDashboard() {
    const [recentObservations, setRecentObservations] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "qvm62q5vr67v");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // const getRecentObservations = (url, requestInfo) => {
    //     let myPromise = fetch(url, requestInfo)
    //     myPromise.then(response => response.text())
    //     .then(data => {
    //         console.log("Getting data...")
    //         // console.log(data)
    //         setRecentObservations(data);
    //     })
    //     .catch(error => console.log("error", error));

    // }

    useEffect(() => {
        // getRecentObservations("https://api.ebird.org/v2/data/obs/CA-QC/recent", requestOptions);
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

    useEffect (() => {
        console.log("Here is a recent observation:");
        console.log(recentObservations[1]);
    }, [recentObservations])

    return (
    <h2>Owl-related things will go in here</h2>
 );
}

export default OwlDashboard;