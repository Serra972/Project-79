import React, {Component} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class SignUpLoginScreen extends Component {

    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:''
        }
    }

    userSignUp = (emailId, password,confirmPassword) =>{
      if(password !== confirmPassword){
          return alert("password doesn't match\nCheck your password.")
      }else{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
          db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            contact:this.state.contact,
            email_id:this.state.emailId,
            address:this.state.address
          })
          return  alert(
               'User Added Successfully',
               '',
               [
                 {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
               ]
           );
        })
        .catch((error)=> {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage)
        });
      }
    }

    showModal = ()=>{
      return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
        <View style={styles.modalContainer}>
          <ScrollView style={{width:'100%'}}>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <Text
              style={styles.modalTitle}
              >Sign Up</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={10}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Email"}
              keyboardType ={'email-address'}
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Confrim Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  confirmPassword: text
                })
              }}
            />
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>
                  this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                }
              >
              <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={()=>this.setState({"isModalVisible":false})}
              >
              <Text style={{color:'#ff5722'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
    }
    
    
      render(){
      return (
        <View style={styles.container}>
         <View style={styles.profileContainer}>
         
         <Text style={styles.title}> Information To and Fro </Text>
         </View>
         {
                this.showModal()
              }
         
         <Text
              style={styles.modalTitle}
              >Login</Text>
         <View style={styles.buttonContainer}> 
         <TextInput 
         style = {styles.loginBox}
         placeholder = "ex @abc.com"
         placeholderTextColor = "#ffff"
         keyboardType = "email-address"
         onChangeText={(email)=>{
           this.setState({emailId:email})
         }}
    
         value={this.state.emailId}
         />
        <TextInput 
         style = {styles.loginBox}
         placeholder = "password"
         placeholderTextColor = "#ffff"
         secureTextEntry={true}
         onChangeText={(password)=>{
           this.setState({password:password})
         }}
    
         value={this.state.password}
         />
        
        <TouchableOpacity
         style={[styles.button,{marginBottom:20,marginTop:20}]}
         onPress={()=>{
           this.usersLogin(this.state.emailId,this.state.password)
         }}
    >
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    
     <TouchableOpacity
         style={styles.button}
         onPress={()=>{
       this.setState({isModalVisible:true})
    
         }}
    >
    <Text style={styles.buttonText}>SignUp</Text>
    </TouchableOpacity>
      
         </View>
           
        </View>
      );
      }
    }

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#CBBBD9',
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:50,
     fontWeight:'300',
     paddingBottom:50,
     color : '#191970'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#000000',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   signupView:{
    flex:0.05,
    justifyContent:'center',
    alignItems:'center'
},
signupText:{
  fontSize:25,
  fontWeight:"bold",
  color:"#000000",
  paddingBottom:20
},
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#000000',
     margin:50,
     fontWeight:'bold'
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:1350,
     height:50,
     alignItem:'center',
     borderColor:'#000000',
     
     borderWidth:1,
     marginTop:20,
     padding:20
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30,
     backgroundColor:'CBBBD9'
   },
   registerButtonText:{
     color:'#191970',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
     color:'#191970'
   },
   label:{
    fontSize:19,
    color:"#191970",
    fontWeight:'bold',
    paddingLeft:10,
    marginLeft:20
  },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#191970",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#black',
     fontWeight:'200',
     fontSize:20,
     fontWeight:'bold'
   }
  })




