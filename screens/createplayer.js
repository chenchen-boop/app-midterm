import React, { useEffect } from 'react';
import { StyleSheet,Button,TextInput,View,Text } from 'react-native';
import { Formik } from 'formik';
import GlobalStyle from '../styles/global';
import { useDispatch, useSelector } from "react-redux";
import { setPlayerInfo ,setTwoPoint,todoAdded} from '../src/redux/playerSlice';
import{ useState } from 'react';
import { selectPlayer,selectAmount,setAmount} from '../src/redux/playerSlice';
import { selectModal, setCreatePlayerModalOpen } from '../src/redux/settingSlice';

const CreatePlayer=()=>{
    const player=useSelector(selectPlayer);
    const amount=useSelector(selectAmount);
    //const [keyStartNumber,setKeyStartNumber]=useState(2);
    // const Modal=useSelector(selectModal);
    // const [modalOpen, setModalOpen] = useState(Modal.modalOpen);
    
    //const {test}=useSelector((state)=>state.player);
    // const [name, setName] = useState(player.Name);
    // const [number, setNumber] = useState(player.number);
    // const [height, setHeight] = useState(player.height);
    // const [weight, setWeight] = useState(player.weight);

    const dispatch = useDispatch();

    // const addPlayer=(newplayer)=>{
    //     newplayer.key=Math.random().toString();
    //     // dispatch(setPlayerInfo((currentPlayers)=>{
    //     //     return[ newplayer,...currentPlayers];
    //     //     }));
    //     dispatch(setPlayerInfo(newplayer));
    //     // console.log(newplayer);
    //       //setModalOpen(false);
    // };

//  useEffect(()=>{
//       dispatch(setModalOpen(modalOpen));

//   },[modalOpen]);






    return(
        <View>
            
            
            
            <Formik
                initialValues={{Name:'',Number:'',Height:'',Weight:'',key:'',Starter:false,Click:false,
                                Stats:{TwoPoint:[[0,0]],ThreePoint:[[]],FreeThrow:[[]],Drebound:[[]],Orebound:[[]],Assist:[[]],Steal:[[]],TurnOver:[[]],Dfour:[[]],Ofour:[[]]}}}
                onSubmit={(values,actions)=>{
                    // addPlayer(values);
                    //values.key=Math.random().toString();
                   
                    values.key=player.length;
                    
                    // dispatch(todoAdded({Name:values.Name,Number:values.Number,Height:values.Height,Weight:values.Weight,key:values.key }));
                    // dispatch(setPlayerInfo({values}));
                    dispatch(todoAdded(values));
                    //setModalOpen(false);
                    dispatch(dispatch(setCreatePlayerModalOpen(false)));
                    actions.resetForm();
                    console.log(values);
                    
                    // console.log(player[0]); 
                    

                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            placeholder='Name'
                            onChangeText={props.handleChange('Name')}
                            //onChangeText={text => setName(text)}
                            value={props.values.Name}
                            style={GlobalStyle.input}
                            
                        />
                        <TextInput
                            placeholder='Number'
                            onChangeText={props.handleChange('Number')}
                            //onChangeText={text => setNumber(text)}
                            value={props.values.Number}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Height'
                            onChangeText={props.handleChange('Height')}
                            //onChangeText={text => setHeight(text)}
                            value={props.values.Height}
                            style={GlobalStyle.input}
                            keyboardType='numeric'
                        />
                        <TextInput
                            placeholder='Weight'
                            onChangeText={props.handleChange('Weight')}
                            //onChangeText={text => setWeight(text)}
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