import { useState } from 'react'
import { Form, Button, Alert, Badge } from 'react-bootstrap'
import Navigation from "../Navigation"
import username from "../../utils/UserAPI/"

// let username = 

const ProfileComp = () => {
  return ( 
<div>
  <h1>
        <Badge bg="secondary">Welcome {{ username }}</Badge>
  </h1>
  </div>



  )}



export default ProfileComp