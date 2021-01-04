import Sighting from "./Sighting";
import SightingMap from "./SightingMap.js"

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
            <section className="container">
                <div className="title">
                    <h2>Did you know?</h2>
                </div>
                <div className="stats">
                    <div>
                        <h3>{totalRecentObservations}</h3>
                        <p>different species of bird have been spotted in Scotland in the last 30 days.</p>
                    </div>
                    <div>
                        <h3>1 in every {displayStat}</h3>
                        <p>of these sightings was an owl.</p>
                    </div>
                </div>
            </section>
            <section className="container" className="recent-sightings">
                <div className="title">
                    <h2>Recent owl sightings in Scotland</h2>
                </div>
                <div className="sightings-container">
                    {owlDetails}
                </div>
                <SightingMap />
            </section>
        </>
    )
}

export default RecentObservationsList;