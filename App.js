// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Log from './Log'
// // import React from 'react';
// import Connect from './Connect';
import RegistrationForm from './RegistrationForm';
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
import { addItem, getById, getAll, updateItem } from './service'
import React, { useState } from "react";
import axios from 'axios'

function App() {
  const [details, setDetails] = useState([]);//שיכניס את הנתונים למערך - בעצם שיכניס למשתנה את כל האוביקט
  const [request, setRequest] = useState();//משתנה כדי לוודא האם היתה גישה לסרוויס

  /*connect to service - node - גישה לסרוויס */
  const getRequestHandler = async () => {
    const response = await axios.get('http://localhost:3001/ravkav')
      .then((response) => {
        setDetails(response.data[0].ravkavId);
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
      {request == "GET" ? <span> {details} Get!!!!!</span> : <span>None</span>}
      <View>
        <Text>Open up App.js to start working on your app!</Text> 
        <RegistrationForm />
        {/* <StatusBar style="auto" /> */}
      </View>
    </div>
  );
}

export default App;
