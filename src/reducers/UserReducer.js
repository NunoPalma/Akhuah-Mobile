export const initialState = {
    profileImage: ''
}

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setProfileImage':
            return {...state, profileImage: action.payload.profileImage};
        default:
            return state;
    }
}