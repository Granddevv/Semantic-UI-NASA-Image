import React, { Component } from 'react';
import { connect } from 'react-redux';
import MultipleDatePicker from 'react-multiple-datepicker';
import { fetchImageData, fetchDataStart } from '../store/actions/index';
import dateFormat from 'dateformat';
import DateItem from './common/DateItem';
import PropTypes from 'prop-types';
import { DatePickerContainer, AppTitleContainer, DatePickerWrraper, AppTitle, DateText, DatesContainer } from './DatePicker.style';

export class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.onSubmitDate = this.onSubmitDate.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {
            dateArray: []
        }
    }

    onSubmitDate(dates) {
        console.log("dates:", dates, dates[0].getYear(), dates[0].getMonth(), dates[0].getDay());
        console.log("formated date", dateFormat(dates[0], 'yyyy-mm-dd'));
        let dateArray= [];
        for(let dateIndex = 0; dateIndex < dates.length; dateIndex++)
        {
            dateArray.push(dateFormat(dates[dateIndex], 'yyyy-mm-dd'));
        }
        this.setState({dateArray: dateArray});
    }

    onClose(index) {
        let dateArray = this.state.dateArray;
        dateArray.splice(index, 1);
        this.setState({dateArray: dateArray});
    }

    onSelect(index) {
        let dateArray = this.state.dateArray;
        const { fetchImageData } = this.props;
        fetchImageData(dateArray[index]);
    }

    render() {
        return (
            <DatePickerContainer>
                <AppTitleContainer>
                    <AppTitle>NASA Image!</AppTitle>
                </AppTitleContainer>
                <DatePickerWrraper>
                    <DateText> Input Dates :</DateText>
                    <MultipleDatePicker onSubmit={dates => this.onSubmitDate(dates)} />
                </DatePickerWrraper>
                <DatesContainer>
                        <span style={{fontSize: '18px !important;', marginRight: '5px;'}}> Dates:</span>
                        {
                            this.state.dateArray.map((item, index) => {
                                return (
                                    <DateItem key={index} onClick={this.onSelect} text={item} index={index} onClose={this.onClose} />
                                )
                            })
                        }
                </DatesContainer>
            </DatePickerContainer>
        )
    }
}

DatePicker.propTypes = {
    fetchImageData: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        fetchImageData: (dates) => {
            dispatch(fetchImageData(dates));
            dispatch(fetchDataStart());
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DatePicker);