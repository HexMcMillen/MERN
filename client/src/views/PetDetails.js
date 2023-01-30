import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const PetDetails = (props) => {

    const { _id } = useParams();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/shelters/${ _id }`)
            .then( (res) => { 
                // console.log(res.data.pet);
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkills(res.data.pet.skills); })
            .catch( (err) => { console.log(err) })
    })
    

    return (
        <div>
            <div>
                <h1>Details about: { name }</h1>
                <Link to={'/'}>back to home</Link>
                <DeleteButton pet_id={ _id } pet_name={ name } />
            </div>
            <div>
                <h3>Pet type: { type }</h3>
                <h3>Description: { description }</h3>
                <h3>Skills:</h3>
                {
                    skills.map( (skill, i) => 
                        <h3 key={ i }>{ skill }</h3>
                    )
                }
            </div>
        </div>
    );
}

export default PetDetails;