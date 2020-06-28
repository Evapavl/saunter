let ADD_FULL_DESCRIPTION = 'ADD_FULL_DESCRIPTION';
let ADD_SHORT_DESCRIPTION = 'ADD_SHORT_DESCRIPTION';

let initialState = { 
    // fullDescriptions: [{id:Date.now().toString(),  title:"fgfg", fullDescr:"kjlgjg"},
    // {id:Date.now().toString(),  title:"nvnvnv",  fullDescr:"mmmm"}],
    shortDescriptions: [
        // {id:Date.now().toString(),  title:"fgfg", shortDescr:"vbvnnvnv", fullDescr:"kjlgjg"},
    {id:Date.now().toString(),  title:"nvnvnv", shortDescr:"ssss", fullDescr:"mmmm"}]
    
}

let addPathReducer = (state =initialState , action) => {
    switch (action.type) {
        case ADD_FULL_DESCRIPTION: {
            let newFullDescriptionText = {
                id:state.id,
                 title:action.title,
                 fullDescr:action.fullDescr
            }
            return {
                ...state, 
                ...action.newFullDescr
                //fullDescriptions:[...state.fullDescriptions, newFullDescriptionText]
            }
        }
        case ADD_SHORT_DESCRIPTION: {
            let newShortDescriptionText = {
                id:state.id,
                 title:action.title,
                 shortDescr:action.shortDescr
            }
            return {
                ...state, 
                ...action.newShortDescr
                //shortDescriptions:[...state.shortDescriptions, newShortDescriptionText]
            }
        }
        default:
            return state;
    }
}

export const  sendNewFullDescription = (id, title, fullDescr) => ({type: ADD_FULL_DESCRIPTION, newFullDescr:{id, title, fullDescr}})
export const  sendNewShortDescription = (id, title, shortDescr, fullDescr) => ({type: ADD_SHORT_DESCRIPTION, newShortDescr:{id, title, shortDescr, fullDescr}})

export default addPathReducer;