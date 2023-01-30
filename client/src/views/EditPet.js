import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditPet = () => {

    const { _id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skills, setSkills] = useState([]);

    const [oneSkill, setOneSkill] = useState();
    const [twoSkill, setTwoSkill] = useState();
    const [threeSkill, setThreeSkill] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/shelters/${ _id }`)
            .then( (res) => { 
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkills(res.data.pet.skills);
                setOneSkill(res.data.pet.skills[0]);
                setTwoSkill(res.data.pet.skills[1]);
                setThreeSkill(res.data.pet.skills[2]);
             })
            .catch( (err) => { console.log(err) })
    }, []);


    const petUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/shelters/update/${ _id }`,
                    { name, type, description, skills: [oneSkill, twoSkill, threeSkill] })
            .then( (res) => { console.log(res); navigate('/')})
            .catch( (err) => { 
                console.log(err);
                setErrors(err.response.data.error.errors); })
    }

    return (
        <div>
            <div>
                <h1>Edit (pet name)</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <form onSubmit={ petUpdate }>
                    <div>
                        <label>Pet Name:</label><br />
                        <input type="text" value={ name } onChange={ (e) => setName(e.target.value) } />
                    </div>
                    { errors?.name && <span style={{color:"red"}}>{ errors?.name?.message }</span> }
                    <div>
                        <label>Pet Type:</label><br />
                        <input type="text" value={ type } onChange={ (e) => setType(e.target.value) } />
                    </div>
                    { errors?.type && <span style={{color:"red"}}>{ errors?.type?.message }</span> }
                    <div>
                        <label>Pet Description:</label><br />
                        <textarea value={ description } onChange={ (e) => setDescription(e.target.value) } />
                    </div>
                    { errors?.description && <span style={{color:"red"}}>{ errors?.description?.message }</span> }<br />
                    <label>Skills(optional):</label>
                    <div>
                        <label>Skill 1:</label>
                        <input type="text" value={ oneSkill } onChange={ (e) => setOneSkill(e.target.value) } />
                    </div>
                    <div>
                        <label>Skill 2:</label>
                        <input type="text" value={ twoSkill } onChange={ (e) => setTwoSkill(e.target.value) } />
                    </div>
                    <div>
                        <label>Skill 3:</label>
                        <input type="text" value={ threeSkill } onChange={ (e) => setThreeSkill(e.target.value) } />
                    </div>
                    <input type="submit" value="Update Pet"/>
                </form>
        </div>
    );
}

export default EditPet;