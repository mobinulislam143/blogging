import React, {useEffect, useState} from 'react';
import {postCategories} from "../APIRequest/APIRequest.js";
import {NavLink, Link} from "react-router-dom";



const Layout = (props) => {
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
        <div>
            <div className="navbar fixed z-50 top-0  shadow bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>হোম</NavLink></li>
                            {
                                categories.map((item,index)=>{
                                    return <li key={index}><NavLink  to={"/byCategory/"+item['id']}>{item['name']}</NavLink></li>
                                })
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Blog Buzz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>হোম</NavLink></li>
                        {
                            categories.map((item,index)=>{
                                return <li key={index.toString()}><NavLink  to={"/byCategory/"+item['id']}>{item['name']}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </div>

            {props.children}
            <div className='container-fluid bg-zinc-200 dark:bg-gray-800 dark:text-slate-300'>
            <div className='container mx-auto'>
            <footer className="footer p-10 ">
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form>
                    <h6 className="footer-title">Newsletter</h6> 
                    <fieldset className="form-control lg:w-80 sm:w-auto">
                    <label className="label sm:max-w-screen-sm">
                        <span className="label-text text-black">Enter your email address</span>
                    </label> 
                    <div className="join ">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item md:w-32" /> 
                        <Link className="btn bg-slate-100 join-item">Subscribe</Link>
                    </div>
                    </fieldset>
                </form>
                <abbr target='_blank' href='https://mahi-lac.vercel.app'><img className='w-40' src='myPic.png' alt='img'/></abbr>
            </footer>
            <p className='text-center pb-5'>All right are reserved by <a target='_blank' href='https://mahi-lac.vercel.app'>Mobinul Islam Mahi</a></p>
            </div>
        </div>

        </div>
    );
};

export default Layout;