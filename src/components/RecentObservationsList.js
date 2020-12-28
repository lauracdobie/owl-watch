function RecentObservationsList({recentObservations}) {
    if (!recentObservations) return null;
    const owls =  recentObservations.filter(bird => bird.comName.includes("Owl"));
    console.log("Here are the owls:");
    console.log(owls);

    const owlDetails = owls.map(owl => {
        return (
            {
                name: owl.comName,
                location: owl.locName,
                date: owl.obsDt,
                key: owl.subId 
            }
        );
    });

    owlDetails.forEach(owl => {
        console.log("Here is an owl");
        console.log(owl);})

            
    
    const displayOwls = owlDetails.map(owl => {
        return (
            <li>
                <p>Name: {owl.name}</p> 
                <p>Location: {owl.location}</p>
                <p>Date: {owl.date}</p>
            </li>
        )
        });
    

    console.log("Here are the display owls:");
    console.log(displayOwls);

    return (
        <>
            <h2>Recent owl sightings</h2>
            <ul>
                {displayOwls}
            </ul>
        </>
    )
}

export default RecentObservationsList;