import Cookies from 'js-cookie';

const initialState = {
    user: {
        _id: '',
        fullname: '',
        email: '',
        password: '',
        role: '',
        token: '',
    },
};

export const userReducer = (
    state = Cookies.get('user')
        ? JSON.parse(Cookies.get('user'))
        : initialState,
    action
) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    _id: '',
                    fullname: '',
                    email: '',
                    password: '',
                    role: '',
                    token: '',
                },
            };
        default:
            return state;
    }
};
