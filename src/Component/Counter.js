import React,{Component} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import store from '../redux/store'
import types from '../redux/types'



export default class Counter extends Component{
  increment=()=>{
    store.dispatch({
      type:types.INCREMENT,
      payload:store.getState().count
    })
    this.setState({})
  }
  
  decrement=()=>{
    store.dispatch({
      type:types.DECREMENT,
      payload:store.getState().count
    })
    this.setState({})
  }
  render(){
    const {count} = store.getState();
    return(
      
        <View style={{alignItems:'center',marginTop:30}}>
        <TouchableOpacity onPress={this.increment}>
        <Text>INCREMENT</Text>  
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress={this.decrement}>
        <Text>DECREMENT</Text>  
        </TouchableOpacity>
        </View>
    )
  }
}