import React from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import { useSelector } from 'react-redux';

const AdminHome = () => {
    const {user} = useSelector(state => state.auth)//reducer function
  return (
    <Layout>
      <div className='container'>
        <div className='d-flex flex-column mt-4'>
            <h1>Welcome Admin <i className='text-success'>{user?.name}</i></h1>
            <h3>Manage BloodForge Blood Bank App</h3>
            <hr/>
            <p>
            Welcome, Administrator, to your cutting-edge blood management application! This powerful tool is designed to streamline the process of managing blood records, ensuring accurate and up-to-date information at all times.<br/>
With a user-friendly interface and advanced features, you can easily access and manage records, monitor inventory levels, and generate real-time reports. Our system is built with the highest standards of security and privacy, ensuring that sensitive information is protected at all times.<br/>

Stay informed and in control with notifications and alerts for critical updates. Our system is always available, providing 24/7 access to the data you need, when you need it.<br/>

Thank you for choosing our blood management application. We are committed to providing you with the best possible experience and support, to help you succeed in your mission to provide top-quality health care.<br/>
            </p>
        </div>
        </div>
    </Layout>
  )
}

export default AdminHome
