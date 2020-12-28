function RecentObservationsList({recentObservations}) {
    if (!recentObservations) return null;
    const owls =  recentObservations.filter(bird => bird.comName === "Ruffed Grouse");
    console.log("Here are the owls:");
    console.log(owls);

    const owlDetails = owls.map(owl => {
        return (
            {
                name: owl.comName,
                location: owl.locName,
                key: owl.obsDt 
            }
        );
    });

    owlDetails.forEach(owl => {
        console.log("Here is an owl");
        console.log(owl);})

            
    
    const displayOwls = owlDetails.map(owl => {
        return (
            <li>
                <p>{owl.name}</p> 
                <p>{owl.location}</p>
            </li>
        )
        });
    

    console.log("Here are the display owls:");
    console.log(displayOwls);

    return (
        <>
            <h2>Recent observations list goes here</h2>
            <ul>
                {displayOwls}
            </ul>
        </>
    )
}

export default RecentObservationsList;