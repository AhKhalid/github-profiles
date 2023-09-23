import React from "react";

export default function Profile({ id, avatar_url, login, company }) {
  console.log(id)
  return (
    <div className="profile" key={id}>
      <img src={avatar_url} className="profile-img" alt="profile image" />
      <div className="profile-details">
        <span className="profile-name">{login}</span>
        <span className="profile-company">{company}</span>
      </div>
    </div>
  )
}