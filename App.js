import { StyleSheet, View, ImageBackground, Text, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { component } from './Screens';
const {RegistrationScreen, LoginScreen } = component;


export default function App() {
  
  const funcHide = (t) => {
  
    Keyboard.dismiss();
     
};
  
  
  return (
   
    <ImageBackground source={require("./img/phoneApp.jpg")} resizeMode={'stretch'} style={styles.image}>
    <TouchableWithoutFeedback onPress={funcHide}>
    
      <View style={styles.container}>
        
    
        
          <RegistrationScreen  />
          {/* <LoginScreen /> */}
       
        
         
        </View>
     
    </TouchableWithoutFeedback>
      </ImageBackground>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
 
  },
  image: {
   
    // position:'relative',
    // flex: 1,
    
    width: '100%',
    height: '100%'
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: "flex-end"
    
  },
 
});
