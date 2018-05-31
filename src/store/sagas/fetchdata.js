import { call, put } from 'redux-saga/effects';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from '../actions/index';

import FetchService from '../../services/index';


export function* fetchData(action) {
    try {

        let imageData = yield call(FetchService.getData, action.payload.dates);
        yield put({type: FETCH_DATA_SUCCESS, imageData});
    } catch (error) {
        yield put({type: FETCH_DATA_FAILED, error})
    }
}