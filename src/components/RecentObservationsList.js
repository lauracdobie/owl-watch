import Sighting from "./Sighting";

function RecentObservationsList({recentObservations}) {
    if (!recentObservations) return null;
    const owls =  recentObservations.filter(bird => bird.comName.includes("Owl"));
    console.log("Here are the owls:");
    console.log(owls);

    const owlDetails = owls.map(owl => {
        return (
            <Sighting
                name = {owl.comName}
                location = {owl.locName}
                date = {owl.obsDt}
                key = {owl.subId} 
            />
        );
    });

    return (
        <>
            <h2>Recent owl sightings</h2>
            <ul>
                {owlDetails}
            </ul>
        </>
    )
}

export default RecentObservationsList;