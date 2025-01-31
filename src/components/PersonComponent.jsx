import React, {useEffect, useState} from "react";
import {createPerson, getPerson, updatePerson} from "../services/PersonService.js";
import {useNavigate, useParams} from "react-router-dom";
import error from "eslint-plugin-react/lib/util/error.js";

const PersonComponent = () => {

    const [uniId, setUniId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')

    const {id} = useParams()

    const [errors, setErrors] = useState({
        uniId:'',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        address: '',
        email: '',
        dateOfBirth: ''
    })

    const navigator = useNavigate();

    useEffect(() => {

        if (id) {
            getPerson(id).then((response) => {
                setUniId(response.data.uniId);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setGender(response.data.gender);
                setPhoneNumber(response.data.phoneNumber);
                setAddress(response.data.address);
                setEmail(response.data.email);
                setDateOfBirth(response.data.dateOfBirth);
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    function saveOrUpdatePerson(e) {
        e.preventDefault();

        if (validateForm()) {

            const person = {uniId, firstName, lastName, gender, phoneNumber, address, email, dateOfBirth}
            console.log(person)

            if (id) {
                updatePerson(id, person).then((response) => {
                    console.log(response.data)
                    navigator('/persons')
                }).catch(error => {
                    console.error(error)
                })
            } else {
                createPerson(person).then((response) => {
                    console.log(response.data);
                    navigator('/persons')
                }).catch(error => {
                    console.error(error)
                })
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {...errors}

        if (uniId.trim()) {
            errorsCopy.uniId = '';
        } else {
            errorsCopy.uniId = 'UniId is required'
            valid = false;
        }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required'
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required'
            valid = false;
        }

        if (gender.trim()) {
            errorsCopy.gender = '';
        } else {
            errorsCopy.gender = 'Gender is required'
            valid = false;
        }

        if (phoneNumber.trim()) {
            errorsCopy.phoneNumber = '';
        } else {
            errorsCopy.phoneNumber = 'Phone number is required'
            valid = false;
        }

        if (address.trim()) {
            errorsCopy.address = '';
        } else {
            errorsCopy.address = 'Address is required'
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required'
            valid = false;
        }

        if (dateOfBirth.trim()) {
            errorsCopy.dateOfBirth = '';
        } else {
            errorsCopy.dateOfBirth = 'First name is required'
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if (id) {
            return  <h2 className='text-center'>Update Person</h2>
        } else {
            return  <h2 className='text-center'>Add Person</h2>
        }
    }

    return (
        <div className='container'>
            <br/> <br/>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>UniId</label>
                            <input
                                type='text'
                                placeholder='Enter UniId'
                                name='uniId'
                                value={uniId}
                                className={`form-control ${errors.uniId ? 'is-invalid' : ''}`}
                                onChange={(e) => setUniId(e.target.value)}
                                required/>
                            {errors.uniId && <div className='invalid-feedback'> {errors.uniId} </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter First Name'
                                name='firstName'
                                value={firstName}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                                required/>
                            {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Last Name'
                                name='lastName'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                                required/>
                            {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Gender</label>
                            <select className={`form-control ${errors.gender ? 'is-invalid' : ''}`} value={gender} onChange={(e) => setGender(e.target.value)} name='gender' required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Phone Number</label>
                            <input
                                type='tel'
                                placeholder='Enter Phone Number'
                                name='phoneNumber'
                                value={phoneNumber}
                                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required/>
                            {errors.phoneNumber && <div className='invalid-feedback'> {errors.phoneNumber} </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Address</label>
                            <input
                                type='text'
                                placeholder='Enter Address'
                                name='address'
                                value={address}
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                onChange={(e) => setAddress(e.target.value)}
                                required/>
                            {errors.address && <div className='invalid-feedback'> {errors.address} </div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                            {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Date Of Birth</label>
                            <input
                                type='date'
                                placeholder='Enter Date Of Birth'
                                name='dateOfBirth'
                                value={dateOfBirth}
                                className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                required/>
                            {errors.dateOfBirth && <div className='invalid-feedback'> {errors.dateOfBirth} </div>}
                        </div>

                        <button className="btn btn-success" onClick={saveOrUpdatePerson}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonComponent