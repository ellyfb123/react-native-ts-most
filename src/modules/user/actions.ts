import { Epic } from 'redux-most';
import epicCreator from '../../utils/epicsCreator';
// import { StackNavigator } from 'react-navigation';
// import ProfileScreen from '../../containers/pages/ProfileScreen'

import * as D from '../../definitions';

import { login, logout,  register } from '../../apis/user';

import userStorage from '../../utils/storage';

import { clearProducts } from '../product/actions';

export const USER_REGISTER = 'USER_REGISTER';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUC = 'USER_LOGIN_SUC';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUC = 'USER_LOGOUT_SUC';

export const userRegister = (user: D.UserForRegister): D.UserAction => ({ type: USER_REGISTER, payload: user });

export const userLogin = (user: D.UserForLogin, meta: D.MetaForLogin): D.UserAction => ({
    type: USER_LOGIN, payload: user, meta
});

export const userLogout = (): D.UserAction => ({ type: USER_LOGOUT });

const registerEpic: Epic<D.GeneralAction> = epicCreator(USER_REGISTER, register, () => {
    alert('注册成功，请回到登录界面登录！');
});

const loginEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGIN, login, (store, response, action) => {
    console.log('username '+response.username);
    console.log('sessionToken '+response.sessionToken);
    userStorage.setUser(response).then(() => {
        console.log('login successfully');
        // navigation.navigate('Profile');
    });
});

const logoutCallback = (store) => {
    userStorage.removeUser().then(() => {
        store.dispatch(clearProducts());
    });
};

const logoutEpic: Epic<D.GeneralAction> = epicCreator(USER_LOGOUT, logout, logoutCallback, logoutCallback);

export const epics: Array<Epic<D.GeneralAction>> = [
    registerEpic,
    loginEpic,
    logoutEpic,
];

// export default StackNavigator({
//     Profile: {
//         screen: ProfileScreen
//     }
// })