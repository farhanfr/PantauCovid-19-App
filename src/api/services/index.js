import axios from 'axios'

import {MAIN_API} from '../sources'

const dataIndonesiaServices = () =>{
    const getAll = async()=>await axios.get(`${MAIN_API}/indonesia`)
    const getAllProvince = async() => await axios.get(`${MAIN_API}/indonesia/provinsi`)
    return{getAll,getAllProvince}
}

const dataWorldServices = () =>{
    const getPositive = async()=>await axios.get(`${MAIN_API}/positif`)
    const getRecovery = async()=>await axios.get(`${MAIN_API}/sembuh`)
    const getDeath = async()=>await axios.get(`${MAIN_API}/meninggal`)
    return{getPositive,getRecovery,getDeath}
}

export{dataIndonesiaServices,dataWorldServices}