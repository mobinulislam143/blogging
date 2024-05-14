import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postDetails } from '../APIRequest/APIRequest';
import Layout from '../Layout/Layout';
import Loader from '../Components/Loader';
import BlogDetail from '../Components/BlogDetail';

    const DetailsPages = () => {

        let {postID}=useParams();
    
        let [list,SetList]=useState(null);
    
        useEffect(()=>{
            (async ()=>{
                let res= await postDetails(postID);
                SetList(res);
            })()
    
        },[postID])
    
    
        return (
            <Layout>
                {list===null?<Loader/>:<BlogDetail list={list}/>}
            </Layout>
        );
    };
    
    export default DetailsPages;