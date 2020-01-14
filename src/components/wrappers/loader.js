import React from 'react';
import Loader from 'react-loader-spinner';
export const ProcessLoader = ({processing}) => (
    processing ? <div className="loader-wrapper">
        <Loader
            className="loader"
            type="BallTriangle"
            color="#01C853"
            height={100}
            width={100}
        />
    </div> : null
)