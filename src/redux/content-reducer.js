let SHOW_FULL_PATH = 'SHOW_FULL_PATH';
let SET_CURRENT_PATH = 'SET_CURRENT_PATH'

let initialState = {
    show: false,
    idCurrentPath: 0,
}

let ContentReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_FULL_PATH: {
            return {
                ...state,
                show: true
            }
        }
        case SET_CURRENT_PATH:
            return {...state, idCurrentPath: action.idCurrentPath}
        default:
            return state;
    }
}

export const  showFullDescription = (show) => ({type: SHOW_FULL_PATH, show})
export const setCurrentPath = (idCurrentPath) => ({type: SET_CURRENT_PATH, idCurrentPath})

export default ContentReducer