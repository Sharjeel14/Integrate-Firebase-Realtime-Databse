import React from 'react';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  SectionList,
  Image,
} from 'react-native';



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayFlatList: [],
    };
  }

  componentDidMount() {
    
    // firestore()
    // .collection('Students')
    // .get()
    // .then(querySnapshot => {
    //   // console.log('Total users: ', querySnapshot.size);
    //   querySnapshot.forEach(documentSnapshot => {
    //     // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //     this.setState({arrayFlatList: documentSnapshot.data()});
    //     console.log(this.state.arrayFlatList);
        
    //   });
    // });
    
    
    database()
      .ref('/Students')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        this.setState({arrayFlatList: snapshot.val()});
      });



  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Assignment - Firebase - FlatList</Text>
        <Text style={styles.heading2}>Fetch Date From Firebase</Text>
        <Text style={styles.flat}>FLatList</Text>

        <FlatList
          data={this.state.arrayFlatList}
          renderItem={({item}) => (
            <View style={styles.flatView}>
              <Text style={styles.text}>ID: {item.id}</Text>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Roll Number: {item.rollno}</Text>
              <Text style={styles.text}>Claas: {item.class}</Text>
              <Text style={styles.text}>College: {item.College}</Text>
              <Text style={styles.text}>Semester: {item.College}</Text>
              <Text style={styles.text}>CGPA: {item.cgpa}</Text>

              <Image
                style={{
                  width: 150,
                  height: 250,
                  position: 'absolute',
                  right: 20,
                  top: 13,
                  borderRadius: 20,
                }}
                source={{
                  uri: item.img,
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  heading1: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  heading2: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  flatView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  flatView2: {},
  flat: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: '#05375a',
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    margin: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 0,
  },
  button: {
    alignItems: 'center',
    margin: 'auto',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
