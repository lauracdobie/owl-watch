import Owl from '../assets/Owl.svg';

function LoadingOwl () {
    return (
        <>
            <div className="loading-image-container">
                <img className="loading-owl-image" src={Owl} alt="Owl icon" />
            </div>
            <div className="loading-text">
                <p>Loading...</p>
            </div>
        </>
    );
}

export default LoadingOwl;