// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { styles } from './styles';
// import { Navigation } from '../../../INFOAPP/src/navigation';
// import StackNames from '../../Navigation/Stacks/StackNames';
// import { Screen } from 'react-native-screens';
// import screenNames from '../../Navigation/screenNames';

// export default function FavoriteArtSc()  {
//   function navigate(SheardStack: StackNames, arg1: { screen: screenNames; }) {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <View style={styles.container}>
//       <Text>welcome to Favorite Articles Screen</Text>
//     <TouchableOpacity
//     onPress={()=>{
//       navigate(StackNames.SheardStack,{
//         screen: screenNames.ArticleDetails,
//       });
//     }}>
// <Text>
//   go to fv sc
// </Text>
//     </TouchableOpacity>
    
//     </View>
//   )
// }   

// // import React from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { MainStackParamList } from '../../Navigation/mainStack';
// // import StackNames from '../../Navigation/Stacks/StackNames';
// // import screenNames from '../../Navigation/screenNames';

// // type FavoriteNavigationProp = NativeStackNavigationProp<
// //   MainStackParamList,
// //   typeof StackNames.MainTap
// // >;

// // export default function FavoriteArtSc() {
// //   const navigation = useNavigation<FavoriteNavigationProp>();

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <TouchableOpacity
// //         onPress={() =>
// //           navigation.navigate(StackNames.SheardStack, {
// //             screen: screenNames.ArticleDetails,
// //             params: {
// //               article:a
// //               },
// //             },
// //           })
// //         }
// //       >
// //         <Text>Go To Article Details</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }


import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../Navigation/mainStack';
import StackNames from '../../Navigation/Stacks/StackNames';
import screenNames from '../../Navigation/screenNames';
import { styles } from './styles';

type FavoriteNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  typeof StackNames.MainTap
>;

export default function FavoriteArtSc() {
  const navigation = useNavigation<FavoriteNavigationProp>();

  const dummyArticle = {
    // title: "Example Title",
    // description: "Example Description",
    // urlToImage: "https://example.com/image.jpg",
    // author: "John Doe",
    // source: { id: null, name: "Example Source" },
    // publishedAt: "2025-11-03T00:00:00Z",
    // content: "Example content...",
    // url: "https://example.com/article",
  };

  return (
    <View style={styles.container}>
      <Text>welcome to Favorite Articles Screen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(StackNames.SheardStack, {
            screen: screenNames.ArticleDetails,
            params: { article: dummyArticle },
          })
        }
      >
        <Text>Go to Article Details</Text>
      </TouchableOpacity>
    </View>
  );
}
