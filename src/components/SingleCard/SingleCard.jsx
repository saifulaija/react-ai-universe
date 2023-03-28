

import React from 'react';
import { FaCalendarAlt, FaArrowRight} from "react-icons/fa";

const SingleCard = (props) => {
    // console.log(props);
    

    const {name,published_in,image,features,description, id,setUniqueId} = props.singleData;

    const handleData =(id)=>{
        console.log(id);
    }
    return (
        <>
           <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Features</h2>
                        
                        {
                            features.map((item,index) =><p key={index}> {index + 1}. {item}</p>)
                        }
                            <hr className='border-2 border-info' />
                        <h3 className='text-1xl font-bold '>{name}</h3>
                        <div className='flex justify-between'> 
                            <div className='flex'>
                                <span className='mr-2'> <FaCalendarAlt/></span>
                                <p>{published_in}</p>
                            </div>

                            <label onClick={()=>props?.setUniqueId(id)}  htmlFor="my-modal-5" className='cursor-pointer'><FaArrowRight/></label>
                           

                        </div>
                           
                     </div>
                </div>
        </>
    );
};

export default SingleCard;