let ADD_SHORT_DESCRIPTION = 'ADD_SHORT_DESCRIPTION';
let ADD_FULL_DESCRIPTION = 'ADD_FULL_DESCRIPTION'
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let SHOW_FULL_PATH = 'SHOW_FULL_PATH';
let SET_CURRENT_PATH = 'SET_CURRENT_PATH'

let initialState = {
    shortDescriptions: [
        {
            id: Date.now().toString(),
            title: "Title path",
            shortDescr: "short description"
        }],
    fullDescriptions: [
        {
            id: Date.now().toString(),
            title: "Title path",
            fullDescr: "full description"
        }],
    followingInProgress: [],
    show: false,
    idCurrentPath: 0,
}

let addPathReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHORT_DESCRIPTION: {
            return {
                ...state,
                shortDescriptions: [...state.shortDescriptions, action.newShortDescr]
            }
        }
        case ADD_FULL_DESCRIPTION: {
            return {
                ...state,
                fullDescriptions: [...state.fullDescriptions, action.newFullDescr]
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                showingInProgress: action.show
                    ? [state.showingInProgress, action.idCurrentPath]
                    : state.showingInProgress.filter(id => id != action.idCurrentPath)
            }
            case SHOW_FULL_PATH: {
                return {
                    ...state,
                    show: true
                }
            }
            case SET_CURRENT_PATH:
                return { ...state, idCurrentPath: action.idCurrentPath }
        default:
            return state;
    }
}

export const sendNewShortDescription = (id, title, shortDescr) => ({ type: ADD_SHORT_DESCRIPTION, newShortDescr: { id, title, shortDescr } })
export const sendNewFullDescription = (id, title, fullDescr) => ({ type: ADD_FULL_DESCRIPTION, newFullDescr: { id, title, fullDescr } })
export const showFullDescription = (show) => ({ type: SHOW_FULL_PATH, show })
export const setCurrentPath = (idCurrentPath) => ({ type: SET_CURRENT_PATH, idCurrentPath })
export const toggleIsFollowingProgress = (show, idCurrentPath) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    show,
    idCurrentPath
})

export default addPathReducer;