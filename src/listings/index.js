import React from 'react'
import sharedUtilValue from '../vp-components/utils/shared'
import s from './listings.module.css'

export const Listings = () => {
    return (
        <div className={s.listings}>
            <h1>Listings APP</h1>
            <hr />
            <div className="alert">{ sharedUtilValue }</div>
        </div>
    )
}

export default Listings
