import React, { useCallback } from "react";
import { useState, } from "react";
import { View, StyleSheet, Image, Text, TextInput, Button, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { ImageBackground } from "react-native-web";
import { Photo } from "../img/addPhoto";

const initialState = { login: '', email:'', password:''};


export const RegistrationScreen = () => {
    const [secure, setSecure] = useState(true);
    const [value, setValue] = useState(initialState);
    const [target, setTarget] = useState('');
        
        const funcSubmit = () => { console.log(value); setValue(initialState);};
    
    const upd = useCallback(()=>setTarget(''),[]);
    
    return (
        <View style={{ ...styles.container, marginTop:  target  ? 147 : 263 }} >
            <ImageBackground style={styles.image}>
                  <Image style={styles.png} source={require("../img/Add.svg")} ></Image>
            </ImageBackground>
          
             <Text style={styles.text}>Регистрация</Text>
            <View style={styles.innerBox} >
                <TextInput
                    onFocus={() => { return setTarget('login'); }}
                    style={{ ...styles.input, borderColor: target === 'login'? '#FF6C00':'#e8e8e8' }}
                    placeholder={'Логин'}
                    placeholderTextColor={'#bdbdbd'}
                    onBlur={upd}
                    value={value.login}
                    onChangeText={(val)=>setValue((preSt)=> ({...preSt,login:val}))}
                />
                    
                <TextInput
                    onFocus={() => { return setTarget('email'); }}
                    style={{ ...styles.input, borderColor: target === 'email'?'#FF6C00':'#e8e8e8' }}
                    placeholder={'Адресс электронной почты'}
                    placeholderTextColor={'#bdbdbd'}
                    onBlur={upd}
                    value={value.email}
                    onChangeText={(val)=>setValue((preSt)=> ({...preSt,email:val}))}
                />
                <View style={styles.overlay}>
                    <TextInput 
                        autoFocus={false}
                        style={{ ...styles.input, ...styles.last, borderColor: target === 'password'?'#FF6C00':'#e8e8e8' }}
                        placeholder={'Пароль'}
                        placeholderTextColor={'#bdbdbd'}
                        secureTextEntry={secure}
                        onFocus={() => {  return setTarget('password'); }}
                        onBlur={upd}
                        value={value.password}
                        onChangeText={(val)=>setValue((preSt)=> ({...preSt,password:val}))}
                    />
                    <Text onPress={() => secure ? setSecure(false) : setSecure(true)} style={styles.show}>{secure?'Показать':'Скрыть'}</Text>
                </View>
                {/* <Button style={styles.btn} title={'Зарегистрироваться'} /> */}
                <TouchableOpacity style={styles.btn}  onPress={funcSubmit}>
                    <Text style={styles.txtBtn}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <Text style={styles.txtLogin}>Уже есть аккаунт? Войти</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
       
            
        
    },
    image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
    marginTop: -60,
    position: 'relative'
    },
    text: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
        letterSpacing: 0.16,
        color: "#212121",
        marginTop: 32,
        marginBottom: 32,
    },
    input: {
        backgroundColor: '#f6f6f6',
        borderRadius: 8,
        borderColor: '#e8e8e8',
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderStyle: "solid",
        zIndex: 0

        
    },
    innerBox: {
      
      width: '100%',  
      paddingLeft: 16,
      paddingRight: 16  
    },
    overlay: {
       marginBottom: 43, 
    },
    show:{
        top: '-50%',
        marginLeft: 'auto',
        marginRight: 16,
        color: '#1B4371',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: "Roboto",
        
    },
    last: {
        marginBottom: 0,
       
    },
    btn: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
       
    },
    txtBtn: {
        paddingBottom: 16,
        paddingTop: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: "Roboto",
    },
    txtLogin: {
       fontSize: 16,
        lineHeight: 19,
        fontFamily: "Roboto",
        textAlign: 'center',
        color: '#1B4371',
    },
    png: {
        alignSelf: 'flex-end',
        borderRadius:'50%',
        width: 25,
        height: 25,
        justifyContent: 'flex-end',
        marginRight: -12.5,
        marginTop: 81
        

      
    }
    
});


