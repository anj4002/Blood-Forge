import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Layout from '../components/Shared/Layout/Layout';
import API from '../services/API';
import { useSelector } from 'react-redux';

const Donation = () => {
    const {user} = useSelector(state=>state.auth)
    const [data, setData] =useState([]);
    //find donor records
    const getDonors = async () => {
      if (!user) return;
        try{
             const {data} =await API.post('/inventory/get-inventory-hospital',{
                filters:{
                 inventoryType:"in",
                 donor: user?._id,
                },
             });
             console.log(data);
            if(data?.success){
                setData(data?.inventory)
            }
        }
        catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        getDonors();
    }, []); // eslint-disable-next-line react-hooks/exhaustive-deps
    
      return (
        <Layout>
        <div className='container mt-4'>
            <table className="table">
      <thead>
        <tr>
          <th scope="col">BloodGroup</th>
          <th scope="col">Inventory Type</th>
          <th scope="col">Quantity</th>
          <th scope="col">Email</th>  
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((record)=>(
              <tr key={record._id}>
              <td>{record.bloodGroup}</td>
              <td>{record.inventoryType}</td>
              <td>{record.quantity}</td>
              <td>{record.email}</td>
              <td>{moment(record.createdAt).format('DD/MM.YYYY hh:mm A')}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
        </Layout>
      )
    }

export default Donation;
