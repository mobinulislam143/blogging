import React, { useEffect, useState } from 'react';
import BlogList from '../Components/BlogList';
import { postLatest } from '../APIRequest/APIRequest';
import Layout from '../Layout/Layout';
import Loader from '../Components/Loader';


const HomePage=()=> {
    let [list, setList] =useState(null)
    useEffect(()=>{
        (async ()=>{
            let res = await postLatest();
            setList(res)
        })()
    },[])
    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
}

export default HomePage;