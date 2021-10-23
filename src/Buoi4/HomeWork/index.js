// import React, {Component} from 'react';
// import {View, StyleSheet, FlatList, Text} from 'react-native';
// import Alto_icon from '../../../assets/Alto_icon.png';
// import Alto_0 from '../../../assets/Alto_0.png';
// import GameFriend from './GameFriend';
// import {
//   blackwindow,
//   captain,
//   flash,
//   ironman,
//   spiderman,
//   strange,
//   suppergirl,
//   wanda,
//   wonderwoman,
//   yasuo,
// } from './images';
// export default class DemoFlatList extends Component {
//   listGameInfo = [
//     {
//       title: 'Strange',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },

//     {
//       title: 'Kara',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },
//     {
//       title: 'Diana',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },
//     {
//       title: 'Natasha',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },

//     {
//       title: 'Strange',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },
//     {
//       title: 'Kara',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#ddd',
//     },
//     {
//       title: 'Diana',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#dddddd',
//     },

//     {
//       title: 'Natasha',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#dddddd',
//     },
//     {
//       title: 'Strange',
//       icon: Alto_icon,
//       subTitle:
//         'Just beyond the horizon sits a majestic desert, vast and unexplored.',
//       preview: Alto_0,
//       backgroundColor: '#dddddd',
//     },
//   ];

//   renderItem = ({item}) => <GameFriend game={item} />;

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.scrollContainer}>
//           <FlatList
//             contentContainerStyle={styles.scrollContent}
//             data={this.listGameInfo}
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => `${item.title}_${index}`}
//           />
//         </View>
//         <View />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//     borderWidth: 1,
//     borderColor: 'cyan',
//   },
//   // scrollContainer: {
//   //   marginHorizontal: 15,
//   //   // borderWidth: 1,
//   // },
//   scrollContent: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 20,
//     // flexGrow: 1,
//     // padding: 10,
//   },
// });
