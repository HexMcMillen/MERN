import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePet = () => {

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skills, setSkills] = useState([]);

    const [oneSkill, setOneSkill] = useState();
    const [twoSkill, setTwoSkill] = useState();
    const [threeSkill, setThreeSkill] = useState();

    const [errors, setErrors] = useState({});


    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/shelters/create',
                    { name, type, description, skills: [oneSkill, twoSkill, threeSkill] })
            .then( (res) => { console.log(res); navigate('/') })
            .catch( (err) => {
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors);
                console.log(errors);
                 })
    }

    return (
        <div>
            <div style={{display:"flex"}}>
                <h1>Know a pet needing a home?</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <div>
                <form onSubmit={ onSubmitHandler }>
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
                    <input type="submit" value="Add Pet"/>
                </form>
            </div>
        </div>
    );
}

export default CreatePet;