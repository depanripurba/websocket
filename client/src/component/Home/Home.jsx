import React,{Fragment} from 'react'
import "./Home.css"
import Modaljoin from '.././Modaljoin/Modaljoin'
const Home = ()=>{
    const kelas = ['depanri','antoni','minalda','doni']
    return(
        <Fragment>
            <center><h1 className="mt-2">BIOCHAT</h1></center>
        <div className="box mt-3">
            <center>
                <h3>Selamat datang di BIOCHAT</h3>
                <Modaljoin />
            </center>
        </div>
        </Fragment>
    )
}
export default Home