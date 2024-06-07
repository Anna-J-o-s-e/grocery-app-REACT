import React from 'react'
import NavBar from './NavBar'

const AddItem = () => {
    return (
        <div>
            <NavBar/>
            <center><h1>ADD GROCERY</h1></center>
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Item Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Item Code</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Quantity</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="number" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Manufacturer</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Category</label>
                                <select name="" id="" className="form-control">
                                    <option value="Edible">Edible</option>
                                    <option value="Stationary">Stationary</option>
                                    <option value="Others">Others</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Date Of Manufacture</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <label htmlFor="" className="form-label">Expiry Date</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" />

                            </div>

                            <center>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <button className="btn btn-success">Add Item</button>

                                </div>
                            </center>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddItem