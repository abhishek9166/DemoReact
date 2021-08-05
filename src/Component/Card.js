import React from 'react';
import {Link} from "react-router-dom";
import {learn} from "../Component/Images";


const Card = (props) => {
    return (
        <>
            <div className="card mt-5">
                <img src={props.imgsrc} className="card-img-top" alt="cardimg" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer d it to make a type specimen book.
                    </p>
                    <Link to={props.Link} className="text-2D9CDB text-decoration-none sf-bold fs-16px text-uppercase">
                        <span> learn more </span>
                        <span className="ml-3"> 
                            <img src={learn} alt="Right Arrow" className="my-auto" /> 
                            </span>
                    </Link>
                </div>
            </div>

            
        </>
    )
}

export default Card;
