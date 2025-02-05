import React, {useEffect, useState} from "react";
import {deletePerson, listPersons} from "../services/PersonService.js";
import {useNavigate} from "react-router-dom";

const ListPersonComponent = () => {

    const [persons, setPersons] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllPersons()
    }, [])

    function getAllPersons() {
        listPersons().then((response) => {
            setPersons(response.data);
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewPerson() {
        navigator('/add-person')
    }

    function updatePerson(id) {
        navigator(`/edit-person/${id}`)
    }

    function removePerson(id) {
        deletePerson(id).then((response) => {
            getAllPersons()
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">List of Persons</h2>
            <button className='btn btn-primary mb-2' onClick={addNewPerson}>Add Person</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th>Person ID</th>
                        <th>University ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        persons.map(person => (
                            <tr key={person.personId}>
                                <td>{person.personId}</td>
                                <td>{person.uniId}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.gender}</td>
                                <td>{person.phoneNumber}</td>
                                <td>{person.address}</td>
                                <td>{person.email}</td>
                                <td>{person.dateOfBirth}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updatePerson(person.personId)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removePerson(person.personId)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPersonComponent