import {useState, useEffect} from "react";
import RecentObservationsList from "../components/RecentObservationsList";

function OwlDashboard() {
    const [recentObservations, setRecentObservations] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "qvm62q5vr67v");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // const getOwls = (array) => {
    //     const owls =  array.filter(bird => bird.comName === "Ruffed Grouse");
    //     console.log(owls);
    //     owls.forEach(owl => {
    //         return (
    //         {
    //             name: owl.comName,
    //             location: owl.locName,
    //             key: owl.obsDt 
    //         }
    //         )
    //     })
    // }

    // const displayOwls = (owls) => {
    //     owls.map(owl =>{
    //         return (
    //             <li>{owl.name} {owl.location}</li>
    //         )
    //     });
    // }

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

    // useEffect (() => {
    //     // console.log("Here is a recent observation:");
    //     // console.log(recentObservations[5]);
    //    const myOwls = getOwls(recentObservations);
    //    console.log(myOwls);
    // //    displayOwls(myOwls);
    // }, [recentObservations])

    return (
    <>
        <h2>Owl-related things will go in here</h2>
        <RecentObservationsList recentObservations={recentObservations}/>
    </>
 );
}

export default OwlDashboard;