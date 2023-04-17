
import { useLocation } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, {Component, useState, useEffect } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC37ZVRljDywxpfZWko1bnmJpPwvwWhu4Q",
  authDomain: "d2loadouts-57a62.firebaseapp.com",
  projectId: "d2loadouts-57a62",
  storageBucket: "d2loadouts-57a62.appspot.com",
  messagingSenderId: "364009280610",
  appId: "1:364009280610:web:50113abf50564af449ad3b",
  measurementId: "G-1LWKLGFT8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//var membership_val = 0


function App() {

  const [membershipId, setMembershipId] = useState([])
  const [primaryWeaponId, setPrimaryWeaponId] = useState([])

  const URLSearch = async () => {
    // const paramSearch = useLocation().search;
    // const codeId = new URLSearchParams(paramSearch).get("code");
    // console.log(codeId)
    const paramSearch = window.location.search
    const codeId = new URLSearchParams(paramSearch);
    const value = codeId.get('code')
    console.log(value)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic NDM2NTI6QkR2TnNyQ0owUUdSRm5Od2E2T0ZRam8zbmZIYklwLjB0anVDREY0ZXJKaw==");
    myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV61rt5CrQXv0q+I9ddZfGro+PognXQwjWM8PS+VE_=v1Nd5Rgw__VtD; __cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmFc2D2nCJ7xP; bungleanon=sv=BAAAAABbWwAAAAAAAALLKQAAAAAAAAAAAAAAAABkksGO6THbCEAAAAC24juBq19vrWkuV/e2G+AfYAIuxykcEZzU+19c02NTvyDpJVVIaRUjFCAud6bSAkum/GVGQdrBs+w7j/Tvs/e2&cl=MC4yMzM4Ny4yNzM4OTQ2; bungled=4356670754031201550; bungledid=By/hVCOErJtJrGjaXL5LAKNSa8GO6THbCAAA");
  
    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("code", value);
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
  
    const tokenFetch = await fetch("https://www.bungie.net/Platform/App/OAuth/Token", requestOptions)
      const data = await tokenFetch.json()
      console.log(data)
      
      // membership_val = data.membership_id
      // console.log(membership_val)
      console.log(data.membership_id)
      setMembershipId(data.membership_id)
      return data.membership_id
      
    }
  
  const profileSearch = async (memberValue) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "");
    myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV61rt5CrQXv0q+I9ddZfGro+PognXQwjWM8PS+VE_=v1Nd5Rgw__VtD; __cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmFc2D2nCJ7xP; bungleanon=sv=BAAAAABbWwAAAAAAAALLKQAAAAAAAAAAAAAAAABkksGO6THbCEAAAAC24juBq19vrWkuV/e2G+AfYAIuxykcEZzU+19c02NTvyDpJVVIaRUjFCAud6bSAkum/GVGQdrBs+w7j/Tvs/e2&cl=MC4yMzM4Ny4yNzM4OTQ2; bungled=4356670754031201550; bungledid=By/hVCOErJtJrGjaXL5LAKNSa8GO6THbCAAA");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    //console.log(membership_val)
    console.log(memberValue)
    const dataFetch = await fetch("https://www.bungie.net/Platform/User/GetBungieNetUserById/" + memberValue + "", requestOptions)
      const returnedData = await dataFetch.json()
      console.log(returnedData.Response)
      const uniqueName = returnedData.Response.uniqueName
      document.getElementById('userCheck').innerText = "User Detected! Welcome " +uniqueName
    }

    const itemSearch = async (memberValue) => {
      var myHeaders = new Headers();
      myHeaders.append("x-api-key", "");
      myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV61rt5CrQXv0q+I9ddZfGro+PognXQwjWM8PS+VE_=v1Nd5Rgw__VtD; __cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmFc2D2nCJ7xP; bungleanon=sv=BAAAAABbWwAAAAAAAALLKQAAAAAAAAAAAAAAAABkksGO6THbCEAAAAC24juBq19vrWkuV/e2G+AfYAIuxykcEZzU+19c02NTvyDpJVVIaRUjFCAud6bSAkum/GVGQdrBs+w7j/Tvs/e2&cl=MC4yMzM4Ny4yNzM4OTQ2; bungled=4356670754031201550; bungledid=By/hVCOErJtJrGjaXL5LAKNSa8GO6THbCAAA");
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      //console.log(membership_val)
      console.log(memberValue)
      const dataFetch = await fetch("https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018440883398/?components=205", requestOptions)
        const returnedData = await dataFetch.json()
        console.log(returnedData.Response)
        const charIds = (Object.keys(returnedData.Response.characterEquipment.data))
        console.log(returnedData.Response.characterEquipment.data[charIds[0]].items[0])
        setPrimaryWeaponId(returnedData.Response.characterEquipment.data[charIds[0]].items[0].itemHash)
        console.log(primaryWeaponId)
      }
    
  useEffect(() => {
    async function dataCalls() {
      const memberValue = await URLSearch();
      await profileSearch(memberValue);
      await itemSearch(memberValue);
    }
    dataCalls();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is a test
        </p>
        <a href="https://www.bungie.net/en/OAuth/Authorize?client_id=&response_type=code">
        <button>
          Sign in here
        </button>
        </a>
        <p id = "userCheck">
          No user detected
        </p>
        <p id = "weaponCheck">
          Cannot display primary weapon as no user is detected
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
