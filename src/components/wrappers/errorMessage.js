import React from 'react';

export const ErrorMessage = ({errMsg}) => (
    errMsg ? <div className="error-msg text-left margin-bottom-15">{errMsg}</div> : null
)