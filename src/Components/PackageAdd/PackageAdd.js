import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';


const PackageAdd = () => {
    const { id } = useParams();
    const [selectedPack, setSelectedPack] = useState([]);
    const address = useRef();

    const onSubmit = data => {

    };

    useEffect(() => {
        axios.get(`https://intense-castle-18583.herokuapp.com/selectedPack/${id}`)
            .then(res => {

                setSelectedPack(res.data)
            })
    }, [id])
    return (
        <div>
            <h1>{selectedPack.event}</h1>
            <form onSubmit={onSubmit} >

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Package</span>
                    <input defaultValue="" type="text" className="form-control" placeholder="Package Name" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Price</span>
                    <input defaultValue={selectedPack.price} type="text" className="form-control" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">selected</span>
                    <input defaultValue={selectedPack?.displayName} type="text" className="form-control" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Email</span>
                    <input defaultValue={selectedPack?.email} type="text" className="form-control" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                    <textarea ref={address} type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <input className="btn btn-danger" type="submit" value="Place Order" />
                </div>


            </form>


        </div>
    );
};

export default PackageAdd;