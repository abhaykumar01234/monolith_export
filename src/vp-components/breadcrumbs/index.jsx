import React from 'react'
import { Link } from 'react-router-dom'
import s from './breadcrumbs.module.css'

const BreadCrumbs = () => {
    return (
        <p className={s.breadcrumbs}>You are on 
            <Link to="/">Home</Link> &gt; 
            <Link to="/vp/ppl">PPL</Link> &gt; 
            <Link to="/vp/listings">Listings</Link>
        </p>
    )
}

export default BreadCrumbs
