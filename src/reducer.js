export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQBTBhgbPtMURajuoUjUtU8eCvn-zmjouYE59aai0rs-J3JuIAsseplmRVdPTr3DWM7sk5k0i5yICftZkRLxh4wyZJqe2Vrq2jfsttof_vbO-E6E8I_ud8QRr0VSh8zGlg37UGMi3ncN8Fcg9_mnBaOSTQTgffaDb3qslzkHlpNN7DEXVySX"
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
    
        default:
            return state
            break;
    }
}

export default reducer