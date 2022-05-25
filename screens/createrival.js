import React from 'react'
import { StyleSheet,Button,TextInput,View,Text } from 'react-native'
import { Formik } from 'formik'
import GlobalStyle from '../styles/global'
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from '../src/redux/gameSlice';
import { setCreateGameModalOpen } from '../src/redux/settingSlice';

const CreateRival=()=>{
    const dispatch = useDispatch();

    return(
        <View>
            
            <Formik
                initialValues={{Date:'',Type:'',Name:'',key:''}}
                onSubmit={(values,actions)=>{
                    // addRival(values);
                    values.key=Math.random().toString();
                    dispatch(todoAdded(values));
                    actions.resetForm();
                    dispatch(setCreateGameModalOpen(false));
                    

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