import React, { Component } from 'react';
import { ItemContainer } from './DateItem.style';
import PropTypes from 'prop-types';

class DateItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ItemContainer onClick={() => this.props.onClick(this.props.index)}>
                <span>{this.props.text}</span>
                <i className="times icon" onClick={()=> this.props.onClose(this.props.index)} />
            </ItemContainer>
        )
    }
}

DateItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default DateItem;