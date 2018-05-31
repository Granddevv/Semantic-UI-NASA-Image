import { takeLatest } from 'redux-saga/effects';

import { FETCH_DATA_FROM_SERVER } from '../actions/index';
import { fetchData } from './fetchdata';

function* fbmSaga() {
    yield takeLatest(FETCH_DATA_FROM_SERVER, fetchData);
}

export default fbmSaga;