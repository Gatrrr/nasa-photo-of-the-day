import React from "react";

const Card = styled.div`
background: #fffedd;
color: black;
width: 200px;
max-height: 200px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
`
const SpaceImage = styled.img`
width: 200px;
height: 200px;
object-fit: scale;
`
const ParaText = styled.p`
margin-bottom:100px;

`

const NasaCard = props => {
    return(
        <div className="nasa-card" key={props.date}>
            <h2>{props.title}</h2>
            <SpaceImage src={props.hdurl} alt=""></SpaceImage>
            <p>Credit: {props.copyright} {props.date}</p>
            <ParaText>{props.explanation}</ParaText>
        </div>
    )
}

export default NasaCard;