import { NavigationActions } from 'react-navigation'

export const showModal = (modalType, modalProps?) => (dispatch) => {
    dispatch(NavigationActions.navigate({routeName: modalType, params: {modalProps: modalProps},}));
}