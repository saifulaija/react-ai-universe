

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {

    
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShoAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  // console.log(setUniqueId);

  const showAllData=()=>{
          // setShoAll=true;
         setShoAll(true)
  }

  const handleId =(id, value)=>{
    console.log(id, value);
  }

  const handleSort=()=>{

    const sortedData = data.sort((a,b)=>{
      return new Date(a.published_in)-new Date(b.published_in)
    })

    setData([...data, sortedData])

  }

  useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    .then(res => res.json())
    .then(data=> setSingleData(data.data))
  },[uniqueId])

  useEffect(()=>{
      const loadData = async () =>{
          const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

          const data = await res.json();
          // console.log(data.data.tools);
          setData(data.data.tools);
      };
      loadData()

  },[])

 
 


    return (
      <div>
        <span onClick={handleSort}>
        <Button>
      sort by date
    </Button>
        </span>
        <div className='grid md:grid-cols-3 md:mx-4 lg:mx-4 gap-4 my-6 shadow-lg'>
           {
            data.slice(0, showAll? 12: 6).map((singleData,index) => <SingleCard singleData = {singleData} key={index} setUniqueId={setUniqueId}></SingleCard>)
           }
        </div>
       {
         !showAll && (<span style={{display:'inline-block text-center'}} onClick={showAllData}>
        <Button>See More</Button>
        </span>)
       }

       <Modal singleData={singleData}></Modal>
      </div>
       
       
    );
};

export default Card;