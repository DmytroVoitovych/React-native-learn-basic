import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback,} from 'react-native';
import { component } from './Screens';
const {RegistrationScreen, LoginScreen } = component;


export default function App() {
  const [stop, setStop] = useState('stop');

  const funcHide = () => {
  
    Keyboard.dismiss();
    if (stop) {
      return setStop('');
    }
  };
   
  useEffect(() => { if (!stop) { return setStop('stop') } });
  
  return (
    <TouchableWithoutFeedback onPress={funcHide}>
    <KeyboardAvoidingView style={{position:'relative'}}  behavior={Platform.OS === 'ios'?'padding':'height'}>
   
      <ImageBackground source={require("./img/phoneApp.jpg")} resizeMode={'cover'} style={styles.image}/>
   
       <RegistrationScreen blur={stop}  />
         {/* <LoginScreen />  */}
              
          
    
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
       
  );
}

const styles = StyleSheet.create({
  
  image: {
   width: '100%',
   height: '100%',
   },
 
});
