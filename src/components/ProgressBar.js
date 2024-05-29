import React from 'react';


class ProgressBar extends React.Component {
    
    

    render() {
        return (
            <div className="progress md-progress" >
                <div className="progress-bar"
                    style={{ width: (this.props.pv * 100 / this.props.pvMax) + "%" }}
                    aria-valuenow={this.props.pv}
                    aria-valuemin="0"
                    aria-valuemax={this.props.pvMax}
                    role="progressbar" >
                    <i className={` fas ${this.props.faType} ${this.props.bgType} icon-text`}> {this.props.pv} {this.props.barName} </i>
                </div>
            </div >
        )
    }

}

export default ProgressBar;