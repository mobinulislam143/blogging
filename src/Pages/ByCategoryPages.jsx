import React, { useEffect, useState } from 'react';
import { postByCategory } from '../APIRequest/APIRequest';
import Loader from '../Components/Loader';
import BlogList from '../Components/BlogList';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';

   
const ByCategoryPages = () => {

    let {categoryID}=useParams();

    let [list,SetList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res= await postByCategory(categoryID);
            SetList(res);
        })()

    },[categoryID])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
    );
};

export default ByCategoryPages;