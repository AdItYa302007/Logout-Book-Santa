import React from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import {Text,Image} from 'react-native';

const MyHeader=(props)=>{
return(
<Header>

leftComponent={<Icon name='bars' type='font-awesome' color='#696969'onPress={()=>{props.navigation.toggleDrawer()}}
/>}

centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
backgroundColor="Beige"

</Header>
)
}
export default MyHeader    