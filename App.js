import React from 'react';
import {View, Text} from 'react-native';
const ModuleInfo = ()=> {
  return (
      <View>
        <Text></Text>
        <Text>
          These are my modules this semester:
        </Text>
        <Welcome code="C346" name="Mobile App Development"/>
        <Welcome code ="C105" name="Introduction to Programming"/>
        <Welcome code="C337" name="Immersive Techonologies"/>
      </View>
  );
};
const Welcome = ({code, name})=> {
  return (
      <View>
        <Text>
          Welcome to {code} - {name}
          </Text>
      </View>

  );
};

export default ModuleInfo;