// import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const HelpMassage = () => {
  //להציג נתונים בטעינת הקומפוננטה
  useEffect(() => {
    console.log("useEffect");

    axios.get('http://localhost:8000/newrequests/1')
      .then((res) => {
        setFieldOfVolunteering(res.setFieldOfVolunteering)
        setfrom(res.from)
        setWhere(res.where)
        setTime(res.time)
        setDay(res.day)
        setDate(res.date)
        console.log("Success!!!!!!!!", res)
      });


    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const [checked, setChecked] = useState(false)
  const [rejection, setRejection] = useState(false)
  const [fieldOfVolunteering, setFieldOfVolunteering] = useState("הסעת חולים");
  const [from, setfrom] = useState("הלל 8 אשדוד");
  const [where, setWhere] = useState("אסותא אשדוד");
  const [time, setTime] = useState("16:15");
  const [day, setDay] = useState("שלישי");
  const [date, setDate] = useState("16/02/2023");


  const handleAccept = () => {
    setChecked(true)




    // פעולות שייעשו בעת לחיצה על כפתור אישור
    // ניתן להשתמש כאן ב-fetch לשליפת הנתונים מ-MongoDB

    const navigation = useNavigation();
    navigation.navigate('SuccessScreen', { message: 'ההתנדבות הושלמה בהצלחה, הפרטים ישלחו בהודעה נפרדת' });
  }

  const handleReject = () => {
    // פעולות שייעשו בעת לחיצה על כפתור דחייה
    // ניתן להשתמש כאן ב-fetch לשליפת הנתונים מ-MongoDB
    setRejection(true);
  }

  // {!rejection && !checked ? <span>!rejection && !checked</span> : <span>ddd</span>}
  return (
    <>
    {!rejection && !checked ?  
    <View style={styles.container}>
      {/* <Text>{`Hello, ${name}!`}</Text> */}
      <Text style={styles.message}>{`צריכים ${fieldOfVolunteering} מ${from} ל${where} בשעה${time} יום${day} ${date} `}</Text>


      {/* <Text style={styles.message}>צריכים הסעה מאשדוד הלל 8 לבית החולים אסותא אשדוד בשעה 16:15 יום שלישי 16/02/2023</Text> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
          <Text style={styles.buttonText}>דחייה</Text>
          {/* if(rejection==true?<massage />:""); */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.buttonText}>אישור</Text>
        </TouchableOpacity>

      </View>
    </View>
    : rejection ? <span>rejection</span> : <span>checked</span>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B0082'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  acceptButton: {
    backgroundColor: '#00CED1',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center'
  },
  rejectButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default HelpMassage;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// const HelpMassage = ({ rideDetails }) => {
//   const navigation = useNavigation();
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAccept = async () => {
//     setIsLoading(true);
//     try {
//         const response = await axios.get('http://localhost:8000/volunteers');
// const volunteers = response.data;

//     //   const response = await axios.patch(`http://localhost:3000/rides/${rideDetails.id}`, { status: 'accepted' });
//       if (response.status === 200) {
//         setIsAccepted(true);
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to accept ride. Please try again later.');
//     }
//     setIsLoading(false);
//   };

//   const handleReject = async () => {
//     setIsLoading(true);
//     try {
//         const response = await axios.get('http://localhost:8000/volunteers');
// const volunteers = response.data;

//     //   const response = await axios.patch(`http://localhost:8000/volunteers/${rideDetails.id}`, { status: 'rejected' });
//       if (response.status === 200) {
//         navigation.navigate('RejectedRide', { rideDetails });
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to reject ride. Please try again later.');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.message}>{rideDetails.details}</Text>
//       {isAccepted ? (
//         <Text style={styles.acceptedText}>התנדבות זו אושרה בהצלחה</Text>
//       ) : (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.acceptButton} onPress={handleAccept} disabled={isLoading}>
//             {isLoading ? (
//               <Text style={styles.buttonText}>טוען...</Text>
//             ) : (
//               <Text style={styles.buttonText}>אישור</Text>
//             )}
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.rejectButton} onPress={handleReject} disabled={isLoading}>
//             {isLoading ? (
//               <Text style={styles.buttonText}>טוען...</Text>
//             ) : (
//               <Text style={styles.buttonText}>דחייה</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F0F8FF',
//     borderRadius: 10,
//     padding: 10,
//     margin: 10,
//     alignItems: 'center'
//   },
//   message: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#4B0082'
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10
//   },
//   acceptButton: {
//     backgroundColor: '#00CED1',
//     padding: 10,
//     borderRadius: 10,
//     width: 120,
//     alignItems: 'center'
//   },
//   rejectButton: {
//     backgroundColor: '#FF6347',
//     padding: 10,
//     borderRadius: 10,
//     width: 120,
//     alignItems: 'center'
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16
//   }
// });

// export default HelpMassage;



