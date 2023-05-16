// import { StatusBar } from 'expo-status-bar';
// import Log from './Log'
// // import React from 'react';

// import { Image } from '@react-navigation/native';
// import Chart from './Chart';




// import React, { useState, useEffect } from "react";
// // import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");

//   // useEffect(() => {
//   //   fetch("http://localhost:8000/message")
//   //     .then((res) => res.json())
//   //     .then((data) => setMessage(data.message));
//   // }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App


// // const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       {/* <Text>Open up App.js to start working on your app!</Text>  */}
// //       <RegistrationForm />
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }
// // export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { addItem, getById, getAll, updateItem, addVolunteer } from './service'
import React, { useState } from "react";
import axios from 'axios'
import LoginScreen from '../uniteapp/login-screen/src/login/login';
import { StyleSheet, Text, View } from 'react-native';
import Connect from './components/Connect';
import HelpMassage from './components/HelpMassage';
import FormComponent from './components/FormComponent';

import AddVolunteer from './components/AddVolunteer';
import SignupScreen from './src/screens/SignupScreen';


// import React from 'react';
import {AppRegistry} from 'react-native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import AppReducer from './src/reducers';
import AppNavigator from './src/navigations/AppNavigation';

const store = createStore(AppReducer, applyMiddleware(thunk));

console.disableYellowBox = true;

function StarterApp() {
    const [details, setDetails] = useState([]);//שיכניס את הנתונים למערך - בעצם שיכניס למשתנה את כל האוביקט
  const [request, setRequest] = useState();//משתנה כדי לוודא האם היתה גישה לסרוויס

  /*connect to service - node - גישה לסרוויס */
  const getRequestHandler = async () => {
    const response = await axios.get('http://localhost:8000/volunteers')
      .then((response) => {
        // setName=(response.data.name)
        setDetails(response.data);
        setRequest("GET");
        console.log("Success!!!!!!!!", response)

      });
    /* */

  };

  return (
    <div className="App">
           <h1>My Site</h1>
          <button onClick={() => getRequestHandler()} >connect to node that works!😂😁</button>
          <hr />{/* הצגת הנתונים בעמידה בתנאי */}
           {request == "GET" ? <span> {details.ravkavId} Get!!!!!</span> : <span>None</span>}
          <View>
           {/* <Text>Open up App.js to start working on your app!</Text>  */}
            {/* <AddVolunteer /> */}
            <HelpMassage/>
            <FormComponent/>
            {/* <try/> */}
           {/* <StatusBar style="auto" /> */}
           <Provider store={store}>
      {/* <AppNavigator /> */}
      {/* <SignupScreen/> */}
     
      {/* <LoginScreen /> */}
    </Provider>
          </View>
         </div>
    
  );
}

AppRegistry.registerComponent('rn_starter_kit', () => StarterApp);

export default StarterApp;



// function App() {
//   const [details, setDetails] = useState([]);//שיכניס את הנתונים למערך - בעצם שיכניס למשתנה את כל האוביקט
//   const [request, setRequest] = useState();//משתנה כדי לוודא האם היתה גישה לסרוויס

//   /*connect to service - node - גישה לסרוויס */
//   const getRequestHandler = async () => {
//     const response = await axios.get('http://localhost:8000/ravkav')
//       .then((response) => {
//         setDetails(response.data);
//         setRequest("GET");
//         console.log("Success!!!!!!!!", response)

//       });
//     /* */

//   };


//   return (
//     <div className="App">
//       <h1>My Site</h1>
//       <button onClick={() => getRequestHandler()} >connect to node that works!😂😁</button>
//       <hr />{/* הצגת הנתונים בעמידה בתנאי */}
//       {request == "GET" ? <span> {details.ravkavId} Get!!!!!</span> : <span>None</span>}
//       <View>
//         {/* <Text>Open up App.js to start working on your app!</Text>  */}
//         <AddVolunteer />
//         {/* <StatusBar style="auto" /> */}
//       </View>
//     </div>
//   );
// }

// export default App;
