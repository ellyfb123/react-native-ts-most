import * as React from 'react'
import { View, Modal } from 'react-native'
import React from 'react';
import SigninScreen from '../pages/SigninScreen';

class SigninModal extends React.Component<{}, {}> {
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <SigninScreen />
                </Modal>

            </View>
        );
    }
}
export default SigninModal;
