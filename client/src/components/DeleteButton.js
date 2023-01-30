import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
    
    const { pet_id, pet_name } = props;
    const navigate = useNavigate();

    const deletePet = (e) => {
        axios.delete(`http://localhost:8000/api/shelters/delete/${ pet_id }`)
            .then( (res) => { console.log(res); navigate('/') })
            .catch( (err) => { console.log(err) })
    }

    return (
        <button onClick={ deletePet }>Adopt { pet_name }</button>
    );
}

export default DeleteButton;