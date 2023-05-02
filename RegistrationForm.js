// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import Img from './assets/propfil.png';



// const VolunteerRegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [id, setId] = useState('');
//   const [dob, setDob] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [gender, setGender] = useState('');
//   const [volunteeringArea, setVolunteeringArea] = useState('');
//   const [branch, setBranch] = useState('');

//   const handleSubmit = () => {
//     // Handle form submission
//   };

//   return (
//     <View>
//       <View style={{ backgroundColor: 'red' }}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>מתחברים למתנדבים</Text>
//         <Image source={Img} style={styles.image} />        <Text>מתנדב</Text>
//       </View>
//       <TextInput placeholder="שם" value={name} onChangeText={setName} />
//       <TextInput placeholder="תעודת זהות" value={id} onChangeText={setId} />
//       <TextInput placeholder="תאריך לידה" value={dob} onChangeText={setDob} />
//       <TextInput placeholder="טלפון" value={phone} onChangeText={setPhone} />
//       <TextInput placeholder="אימייל" value={email} onChangeText={setEmail} />
//       <TextInput placeholder="מגדר" value={gender} onChangeText={setGender} />
//       <TextInput placeholder="תחום התנדבות" value={volunteeringArea} onChangeText={setVolunteeringArea} />
//       <TextInput placeholder="סניף שמעוניין להתנדב" value={branch} onChangeText={setBranch} />
//       <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }} onPress={handleSubmit}>
//         <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>אישור</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default VolunteerRegistrationForm;




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Img from './assets/propfil.png';

const VolunteerRegistrationForm = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [volunteeringArea, setVolunteeringArea] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <View>
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>מתחברים למתנדבים</Text>
        <Image source={Img} style={{ width: 50, height: 50, alignSelf: 'center' }} />
        <Text>מתנדב</Text>
      </View>
      <TextInput placeholder="שם" value={name} onChangeText={setName} />
      <TextInput placeholder="תעודת זהות" value={id} onChangeText={setId} />
      <TextInput placeholder="תאריך לידה" value={dob} onChangeText={setDob} />
      <TextInput placeholder="טלפון" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="אימייל" value={email} onChangeText={setEmail} />

      {/* <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="מגדר" value="" />
        <Picker.Item label="חרדי" value="חרדי" />
        <Picker.Item label="יהודי" value="יהודי" />
        <Picker.Item label="ערבי" value="ערבי" />
        <Picker.Item label="חילוני" value="חילוני" />
        <Picker.Item label="דתי" value="דתי" />
      </Picker> */}

      <Picker
        selectedValue={volunteeringArea}
        onValueChange={(itemValue) => setVolunteeringArea(itemValue)}
      >
        <Picker.Item label="תחום התנדבות" value="" />
        <Picker.Item label="הסעות חולים" value="הסעות חולים" />
        <Picker.Item label="גיהוץ" value="גיהוץ" />
        <Picker.Item label="העברת חבילות"/>
        </Picker>
        <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }} onPress={handleSubmit}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>אישור</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VolunteerRegistrationForm;
