let ADD_SHORT_DESCRIPTION = 'ADD_SHORT_DESCRIPTION';
let ADD_FULL_DESCRIPTION = 'ADD_FULL_DESCRIPTION'

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
        }]
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
        default:
            return state;
    }
}

export const sendNewShortDescription = (id, title, shortDescr) => ({ type: ADD_SHORT_DESCRIPTION, newShortDescr: { id, title, shortDescr } })
export const sendNewFullDescription = (id, title, fullDescr) => ({ type: ADD_FULL_DESCRIPTION, newFullDescr: { id, title, fullDescr } })
export default addPathReducer;