import { useState } from "react";

export function ProfileFollowing({children, initialIsFollowing, image, name}){
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    const handleClick = ()=>{
        setIsFollowing(!isFollowing);
    }

    const textButton = isFollowing ? "Siguiendo" : "Seguir";
    const claseButton = isFollowing ? "profileButton is-following" : "profileButton";

    return (
        <article className="profile">
            <div className="profile-container">
                <div className="profile-img">
                    <img src={image} alt={name} />
                </div>
                <div className="profile-info">
                   {children}
                </div>
            </div>
            <aside>
                <button className={claseButton} onClick={handleClick}>
                    <span className="claseButton-text">{textButton}</span>
                    <span className="claseButton-stopFollowing">Dejar de seguir</span>
                </button>
            </aside>          

            
        </article>
    )
}