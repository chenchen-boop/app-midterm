import React from 'react'
import { StyleSheet,Button,TextInput,View,Text } from 'react-native'
import { Formik } from 'formik'
import GlobalStyle from '../styles/global'



const CreatePlayer=({addPlayer})=>{
    return(
        <View>
            
            
            
            <Formik
                initialValues={{Name:'',Number:'',Height:'',Weight:''}}
                onSubmit={(values,actions)=>{
                    addPlayer(values);
                    actions.resetForm();
                    console.log(values); 

                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            placeholder='Name'
                            onChangeText={props.handleChange('Name')}
                            value={props.values.Name}
                            style={GlobalStyle.input}
                            
                        />
                        <TextInput
                            placeholder='Number'
                            onChangeText={props.handleChange('Number')}
                            value={props.values.Number}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Height'
                            onChangeText={props.handleChange('Height')}
                            value={props.values.Height}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Weight'
                            onChangeText={props.handleChange('Weight')}
                            value={props.values.Weight}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                    

                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>


             )}       



            </Formik>
        
    
        </View>
    )
       

       
    


}
export default CreatePlayer;