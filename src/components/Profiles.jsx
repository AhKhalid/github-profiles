import React from "react";
import Profile from "./Profile"



export default function Profiles(props) {

    return (
        <div className="profiles">
            {
                props.profiles.map(profile => {
                    return <Profile id={profile.id}
                        login={profile.login}
                        avatar_url={profile.avatar_url}
                        key={profile.id}
                    />
                })
            }
        </div>
    )
}