import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchImageData } from '../store/actions/index';
import { Grid, Image } from 'semantic-ui-react'
import { DisplayDataContainer, ItemContainer, ImageWrraper, ImageTitle } from './DisplayItem.style';

export class DisplayItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("image Data list", this.props.imageData);
        return (
            <DisplayDataContainer>
                {this.props.process == true && <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>}
                {this.props.process == false && <div>
                    <ImageTitle><span>Fetched Images</span></ImageTitle>
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
            </DisplayDataContainer>
        )
    }
}

DisplayItem.propTypes = {
    imageData: PropTypes.object.isRequired,
    process: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        imageData: state.imageData,
        process: state.process
    }
}


export default connect(
    mapStateToProps,
    null
)(DisplayItem);
