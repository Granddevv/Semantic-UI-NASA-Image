import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchImageData } from '../store/actions/index';
import { Grid, Image } from 'semantic-ui-react'
import { DisplayDataContainer, ItemContainer, ImageWrraper, ImageTitle, ErrorWidget } from './DisplayItem.style';

export class DisplayItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("image Data list", this.props.imageData);
        return (
            <DisplayDataContainer>
                <ImageTitle><span>Fetched Images</span></ImageTitle>
                {this.props.process == true && <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>}
                {this.props.process == false && this.props.success == true && <div>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Image src={this.props.imageData.url} />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={this.props.imageData.hdurl} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid></div>}
                {this.props.process == false && this.props.success == false && <ErrorWidget>
                        <span> No Images </span>
                    </ErrorWidget>}
            </DisplayDataContainer>
        )
    }
}

DisplayItem.propTypes = {
    imageData: PropTypes.object.isRequired,
    process: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        imageData: state.imageData,
        process: state.process,
        success: state.success
    }
}


export default connect(
    mapStateToProps,
    null
)(DisplayItem);
