import ProfilePicture from "./profile_pic.jpg"

function Card () {
   

    return (
        <div className="card">
            <img className="card-image" src={ProfilePicture} alt="profile picture" />
            <h2 className="card-title">A. MATSIEV</h2>
            <p className="card-text">Web developer</p>
        </div>
        
    )
}

export default Card;