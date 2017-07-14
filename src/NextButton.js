import React from 'react';

class NextButton extends React.Component {
    componentDidMount() {
        // some logic here - we only test if the method is called
    }
    render() {
        return (
            <div className="my-component">
                <button onClick={this.props.handleClick} type="button">My next button</button>
            </div>
        )
    }
};

export default NextButton;