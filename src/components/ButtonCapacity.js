import React from 'react';
import { useDispatch } from 'react-redux';



const ButtonCapacity = () => { 
    function combat(){
        console.log('aie !')
    }
    return (
        <button type="button" onClick={() => this.combat()} className="btn btn-success material-tooltip-main ">
                hit
                <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )
}

export default ButtonCapacity;