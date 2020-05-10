import React from 'react'
import Upload from '.././Upload/Upload'

const Uploadfoto = ({user})=>{
    return(
        <center>
        <Upload user={user} />
        {console.log(user)}
        </center>
    )
}
export default Uploadfoto