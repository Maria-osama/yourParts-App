import React from 'react';

const Feature = (props) => {
    console.log("el props ya 7ywan")
    console.log(props.featurename)  
        return (
            <div>
                {props.featurename}
            </div>
        );
} 
export default Feature;