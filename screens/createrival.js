import React from 'react'
import { StyleSheet,Button,TextInput,View,Text } from 'react-native'
import { Formik } from 'formik'
import GlobalStyle from '../styles/global'
import { useDispatch, useSelector } from "react-redux";
import { todoAdded ,selectGame} from '../src/redux/gameSlice';
import { setCreateGameModalOpen } from '../src/redux/settingSlice';

const CreateRival=()=>{
    const dispatch = useDispatch();
    const game=useSelector(selectGame);
    return(
        <View>
            
            <Formik
                initialValues={{Date:'',Type:'',Name:'',Time:'',QuarterLastTime:'600',ScoreHome:0,ScoreAway:0,key:''}}
                onSubmit={(values,actions)=>{
                    // addRival(values);
                    //values.key=Math.random().toString();
                    values.key=game.length;
                    if(values.Time==''){
                        values.Time='600';
                    }
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
                        <TextInput
                            placeholder='Time'
                            onChangeText={props.handleChange('Time')}
                            value={props.values.Time*60}
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