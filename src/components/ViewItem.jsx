import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewItem = () => {
    const [data, changeName] = useState(
        [
            {"item": "Chana Dal", "code": "dsere456", "price": 60, "category": "Edible", "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHCtEcCqPjdRDnY5SuwaopIkx8gQ_KugOdYWtKGBzqapL984FfIknFT7Eo0RtsT1i_OYmXTz_7CSpuac7wssUJDGSy9J6u32uzy-88rzhdhaHKoYGnm1IN&usqp=CAE"},
            {"item":"Oats","code":"desfwr4k","price":162,"category":"Edible","image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3VYan7tA1Sb003Rp89zXZu3WVgEi36LKEM2c0gS7TmQrVSfZZHEImzTxNQbYlE7hMKGDRayT1y2imhNPmVwKeKXfNob28zlwf3yFoOwV84-drthMIcAgl&usqp=CAE"},
            {"item":"Fresh avacado","code":"vgfy583k","price":215,"category":"Edible","image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoxgWtKYM4DjvPU8G79Z0DQoOYHQhU6R1C_S_Aa_Vqd6PS_czFIVuy-eAsFrC73rUVFItf_W5PKNWVmMQREi_OKlDNKkThm5HwxYvtjVOm99fGOpBnaXFq7w&usqp=CAE"},
            {"item":"Notebook 3","code":"frhju65w","price":210,"category":"Stationary","image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZzzleXhWL-Fy5Od_3A8h-UlJATxCSKuZsL7lQlG4eXowh1nS5EhxMw47HOFi3UK6WYYLv0coimAJVqYLDGrdXF0I6mdK86XrwWXKxGK-E4vVvnPUw11i4Rw&usqp=CAE"},
            {"item":"Notepad","code":"346567if","price":230,"category":"Stationary","image":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwz0kk10n4u9C3dmIVUAGZk-h9q3pSrFZ_MVwI1lWq5U4nySJrm_ua3wMWJ5DQTF1fZmU8SNJfIv4LMU7kGh47mId2xeZOiZoCGqTyJvP1x2l_C3AQIQ-t&usqp=CAE"},
            {"item":"Ground Peanut","code":"edr476hv","price":218,"category":"Edible","image":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBsTBYbT5898uFXz4lD_Pj6TDO7kMe9wd_U6gA37dC7F82yM8B67-ejMlGj1SyjzQM2PVS-wD5RMFpuo939xwvfWdyMdwIXTF_ovHiAWBnCuAI41Qu-OnG&usqp=CAE"},
            {"item":"Broccoli","code":"rew567g3","price":160,"category":"Edible","image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQv5lfGqEFtWDlxvyA9pn7EwDW3IvPLLU-sfOusjpQddUI6PMZYHyVHFDkuu3dn3Zww4nfBXGTUQ91AhAH9ctOC1OJUc727MezLiw1MIU6YfcmYFVXY32l7Vw&usqp=CAE"}

    
       
      ]  
    )
return (
    <div>

        <NavBar />
        <br />
        <center><h1>Grocery List</h1></center>
        <br /><br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card">
                                        <img src={value.image} height="250px" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Item : {value.item}</h5>
                                            <p class="card-text">Price : {value.price}<br/>Code : {value.code}<br/>Category : {value.category}</p>
                                            <a href="#" class="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
        
                                </div>
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        </div>



    </div>
)
}

export default ViewItem