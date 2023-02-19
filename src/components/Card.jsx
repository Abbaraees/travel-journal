import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-container">
                <img src={props.item.imageUrl} className="card--img" />
            </div>
            <div className="card--info">
                <p className="card--location">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    {props.item.location} 
                    <a href={props.item.googleMapUrl} className="card--gmap">View on Google Maps</a>
                </p>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            
            </div>
        </div>
    )
}