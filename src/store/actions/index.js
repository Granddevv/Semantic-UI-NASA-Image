export const FETCH_DATA_FROM_SERVER = 'FETCH_DATE_FROM_SERVER';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const START_FETCH_DATA = 'START_FETCH_DATA';

export function fetchImageData(dates) {
    return {
        type: FETCH_DATA_FROM_SERVER,
        payload: { dates }

    }
}

export function fetchDataStart() {
    return {
        type: START_FETCH_DATA
    }
}