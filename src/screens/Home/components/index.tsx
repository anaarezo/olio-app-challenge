import React, {ScrollView, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import * as S from './styles';

const Header = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>ProductDetailsScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Header;
