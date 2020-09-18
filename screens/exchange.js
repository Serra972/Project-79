import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    KeyboardAvoidingView,
    Alert,
    TextInput, 
    Modal,
} from 'react-native';
import db from "../config";
import firebase from "firebase"

export default class Exchange extends React.Component {
    constructor(){
        super();
        this.state={
            item:"",
            description:"",
        }
    }

addItem=()=>{
    db.collection("requests").add({
        item:this.state.item,
        description:this.state.description
    });
    return(alert("item added"));
}


    render(){
        return( 
            <View style={{flex:1}}>
                <KeyboardAvoidingView style={styles.keyBoardStyle} behavior="padding">
                
                

                <TextInput style={styles.formTextInput}
                    placeholder="Item name"
                    onChangeText={(text)=>{
                        this.setState({
                            item : text
                        })
               
            }}
                    value={this.state.item}
                />
                

<TextInput style={styles.formTextInput}
                    placeholder="Description name"
                    onChangeText={(text)=>{
                        this.setState({
                            discription : text
                        })
                    }}
                    value={this.state.item}
                />

                <TouchableOpacity style={styles.button}>
                    onPress={()=>{
                        this.addItem();
                        this.setState({
                            item:"",
                            description:"",
                        })
                    }}
                    <Text>Add Item</Text>
                 </TouchableOpacity>
                 </KeyboardAvoidingView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"50%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"15%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )