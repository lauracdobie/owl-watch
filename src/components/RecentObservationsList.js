import Sighting from "./Sighting";

function RecentObservationsList({recentObservations}) {
    if (!recentObservations) return null;
    const owls =  recentObservations.filter(bird => bird.comName.includes("Owl"));
    console.log("Here are the owls:");
    console.log(owls);

    const totalRecentObservations = recentObservations.length;
    const totalOwls = owls.length;

    const owlStat = totalRecentObservations / totalOwls;
    const displayStat = Math.ceil(owlStat);

    const owlDetails = owls.map(owl => {
        return (
                <Sighting
                    name = {owl.comName}
                    sciName = {owl.sciName}
                    location = {owl.locName}
                    date = {owl.obsDt}
                    number = {owl.howMany}
                    key = {owl.subId} 
                />
        );
    });

    return (
        <>
            <h2>Recent owl sightings in Scotland</h2>
            <h3>Did you know?   </h3>
            <section>
                <div>
                    <h4>{totalRecentObservations}</h4>
                    <p>different species of bird have been spotted in Scotland in the last 30 days.</p>
                </div>
                <div>
                    <h4>1 in every {displayStat}</h4>
                    <p>of these sightings was an owl.</p>
                </div>
            </section>
            {owlDetails}
        </>
    )
}

export default RecentObservationsList;