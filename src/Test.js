import React from 'react'
import { VpPpl } from '@capterra/dist/ppl';
import '@capterra/dist/ppl/ppl.min.css';

import { VpListings } from '@capterra/dist/listings';
import '@capterra/dist/listings/listings.min.css';

import { VPF } from '@capterra/dist/app';
import '@capterra/dist/app/app.min.css';

const Test = () => {
    console.log(VPF)
    return (
        <div>
            <VPF.App />

            <VpPpl.PPL />

            <VpListings.Listings />
        </div>
    )
}

export default Test
