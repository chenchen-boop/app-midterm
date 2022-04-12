import React from 'react'
import { StyleSheet,Button,TextInput,View,Text } from 'react-native'
import { Formik } from 'formik'

const Form=()=>{

    return(
        <View>
            <Formik
                initialValues={{Name:'a',Number:'1',}}
                onSubmit={(values)=>{
                    console.log(values); 

                }}
            >
             {(props)=>(
                <View>
                    <TextInput
                        placeholder='Name'
                        onChangeText={props.handleChange('Name')}
                        value={props.values.Name}
                    />
                

                <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                </View>






             )}       



            </Formik>
        </View>
    )




}
export default Form;