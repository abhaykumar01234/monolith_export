import React from 'react'
import s from './campaigns.module.css'

const CampaignExpansion = () => {
    return (
        <div className={s.campaigns}>
            <h1>Campaign Expansion</h1>
            <hr />
            <div className={s.tabs}>
                <p>Categories TAB</p>
                <p>Countries TAB</p>
                <p>Markets TAB</p>
            </div>
        </div>
    )
}

export default CampaignExpansion
