import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {

    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/shelters')
            .then( (res) => { 
                setAllPets(res.data.pets);
             })
            .catch( (err) => { console.log(err) });
    }, []);

    const sorted = allPets.sort(function(a, b) {
        var textA = a.type.toUpperCase();
        var textB = b.type.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1: 0
    });

    return(
        <div>
            <div style={{display:"flex"}}>
                <h1>These pets are looking for a good home</h1>
                <Link to={'/pets/new'}>add a pet to the shelter</Link>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        sorted.map( (pet, i) => 
                            <tr key={ i }>
                                <td>{ pet.name }</td>
                                <td>{ pet.type }</td>
                                <td>
                                    <Link to={`/pets/${ pet._id }`}>details</Link> |
                                    <Link to={`/pets/edit/${ pet._id }`}>edit</Link>
                                </td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    );
}

export default HomePage;