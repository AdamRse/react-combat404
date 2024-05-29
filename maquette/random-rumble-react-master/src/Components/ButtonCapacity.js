import React from 'react';



class ButtonCapacity extends React.Component {
     combat = () => {
        console.log('aie !')
    }
    render() {
        return (
            <button type="button" onClick={() => this.combat()} className="btn btn-success material-tooltip-main ">
                hit
            <i className="fas fa-bomb"></i> 5
        <i className="fas fa-fire-alt"></i> - 5
    </button>
        )
    }

}



export default ButtonCapacity;