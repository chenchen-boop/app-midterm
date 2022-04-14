import React from 'react'
import { StyleSheet,Button,TextInput,View,Text } from 'react-native'
import { Formik } from 'formik'
import GlobalStyle from '../styles/global'



const CreateRival=({addRival})=>{
    return(
        <View>
            
            <Formik
                initialValues={{Date:'',Type:'',Name:''}}
                onSubmit={(values,actions)=>{
                    addRival(values);
                    actions.resetForm();
                    

                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            placeholder='Date'
                            onChangeText={props.handleChange('Date')}
                            value={props.values.Date}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Type'
                            onChangeText={props.handleChange('Type')}
                            value={props.values.Type}
                            style={GlobalStyle.input}
                        />
                        <TextInput
                            placeholder='Name'
                            onChangeText={props.handleChange('Name')}
                            value={props.values.Name}
                            style={GlobalStyle.input}
                        />
                        
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>


             )}       



            </Formik>
        
    
        </View>
    )
       

       
    




}
export default CreateRival;