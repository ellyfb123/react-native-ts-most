import * as React from 'react'
import * as Redux from 'redux'
import { StyleSheet, TextInput, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';
import {StackNavigator} from 'react-navigation'
import {createProduct} from "../../modules/product/actions";
import { ImagePicker } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        height: 30,
        width: 300,
        marginTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#D1D1D1',
        fontSize: 14,
    },
    button: {
        backgroundColor: '#FAE05E',
        borderRadius: 10,
        width: 300,
        marginTop: 50,
    },
    uploadImg: {
        paddingTop: 20,
        color: 'grey',
        backgroundColor: '#cccccc'

    },
    uploadImgBtn: {
        width: 600,
        backgroundColor: '#cccccc'

    }
});

interface Props {
    dispatch?: Redux.Dispatch<object>;
}
interface State {
    name: string;
    img: string;
    price: string;
    description: string;
}

class UploadScreen extends React.Component<Props, State> {
  static navigationOptions = {
      title: '发布宝贝',
  };

  constructor(props) {
      super(props);
      this.state = {
          name: '',
          img: '',
          price: '',
          description: '',
      }
  }

  handleNameChange = (name) => {
    this.setState({name});
  };

  handlePriceChange = (price) => {
      this.setState({price});
  };

  handleDescriptionChange = (description) => {
      this.setState({description})
  };

  handleUpload = (name, price, img, description) => {
      const { dispatch } = this.props;
      dispatch(createProduct(
          {
              name,
              price,
              img,
              description
          })
      );

  };

    handlePickImg = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ img: result.uri });
        }
    };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.main}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Button
                      style={styles.uploadImgBtn}
                      title='点击上传图片'
                      onPress={this.handlePickImg}
                  />
                  {this.state.img ? <Image source={{ uri: this.state.img }} style={{ marginTop: 20, width: 100, height: 100 }} /> : undefined}

              </View>
              <TextInput autoCapitalize='none'
                         style={styles.input}
                         placeholder='商品名称'
                         clearButtonMode='while-editing'
                         onChangeText={(text) => {this.handleNameChange(text)}}/>
              <TextInput autoCapitalize='none'
                         style={styles.input}
                         placeholder='售价 ¥'
                         clearButtonMode='while-editing'
                         onChangeText={(text) => {this.handlePriceChange(text)}}/>
              <TextInput multiline={true}
                         numberOfLines={4}
                         autoCapitalize='none'
                         style={[styles.input, {height: 100, borderWidth: 1, borderColor: '#D1D1D1'}]}
                         placeholder='添加描述...'
                         clearButtonMode='while-editing'
                         onChangeText={(text) => {this.handleDescriptionChange(text)}}/>
              <Button
                  raised
                  buttonStyle={styles.button}
                  color="#000"
                  title="开始出售"
                  onPress={() => {this.handleUpload(
                      this.state.name,
                      this.state.price,
                      this.state.img,
                      this.state.description
                  )}}
              />
          </View>
      </ScrollView>
    )
  }
}

export default StackNavigator({
    Home: {
        screen: connect()(UploadScreen)
    },
});
