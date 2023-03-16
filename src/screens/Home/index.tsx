import React, {ScrollView, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import * as S from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
