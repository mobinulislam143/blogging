import React, {useEffect, useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link, NavLink } from 'react-router-dom';
import './Carousel.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {postCategories} from "../APIRequest/APIRequest";

const AutoplaySlider = withAutoplay(AwesomeSlider);


function Carousel(props) {
    const [categories,SetCategories]=useState([]);
    useEffect(()=>{
        (async ()=>{
          if(sessionStorage.getItem('categories')){
              let res=sessionStorage.getItem('categories');
              SetCategories(JSON.parse(res));
          }
          else{
              let res= await postCategories();
              SetCategories(res)
              sessionStorage.setItem('categories',JSON.stringify(res))
          }
        })()
    },[])
    return (
        <>
            <div className='container-fluid mt-20'>
                <div className='container mx-auto'>
                   
                <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                <span class="font-medium">Info alert!</span> Change a dark theme then you get a better result.
                </div>
                

                    <div className="grid lg:grid-cols-4 gap-10 my-10 sm:grid-cols-1">
                        <div className="card px-4 bg-white dark:bg-gray-800 dark:text-slate-400 shadow-md py-4">
                            <ul>
                                <li className='py-1'><Link to={'/'} className='text-slate-600 font-semibold transition-all  hover:text-amber-500'>হোম</Link></li>
                                {
                                    categories.map((item,index) => {
                                        return <li key={index} className='py-1'><Link to={"/byCategory/"+item['id']} className='text-slate-600 dark:text-slate-300 font-semibold transition-all hover:text-amber-500'>{item['name']}</Link></li>
                                    })
                                }
                               
                            </ul>
                        </div>
                        <div className="col-span-3">
                        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
                            <div data-src="sports.jpg" />
                            <div data-src="jonWick.jpg" />
                            <div data-src="fastX.jpg" /> 
                            <div data-src="science.jpg" />
                            <div data-src="science1.jpg" />
                         
                        </AutoplaySlider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;