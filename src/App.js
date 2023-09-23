import logo from './logo.svg';
import InputForm from './components/InputForm';
import Profiles from './components/Profiles';
import React from 'react';
import axios from 'axios'

function App() {

  const baseURL = 'https://api.github.com/users';

  const [profiles, setProfiles] = React.useState([])
  const getData = async (profileName) => {
    
    if(profileName == null || profileName == '') return

    const res = await axios.get(`${baseURL}/${profileName}`).catch(err => {
      console.log(err)
      return
    })

    if(res?.data != null)
    setProfiles([...profiles, res.data])
  }

  return (
    <div className='container'>
      <InputForm onClick={getData} />
      <Profiles profiles={profiles} />
    </div>
  );
}

export default App;
