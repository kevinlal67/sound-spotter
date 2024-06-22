import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Login() {
  
  const googleSignIn = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
          console.log('Credential Response:', credentialResponse);
    
          if (credentialResponse && credentialResponse.access_token) {
            const accessToken = credentialResponse.access_token;
    
            try {
              // Fetch user info from Google API
              const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              });
    
              console.log('User Info:', userInfoResponse.data);
            } catch (error) {
              console.error('Failed to fetch user info:', error.response ? error.response.data : error.message);
            }
          } else {
            console.error('No access token found in credential response');
          }
        },
        onError: (error) => {
          console.error('Login Failed:', error);
        },
  })
  return (
    <div>
      
        {/* <GoogleLogin 
            onSuccess={credentialResponse => {
            console.log(credentialResponse)
            }} 
            onError={() => { 
                console.log('Login Failed')
            }}
        /> */}
        <button onClick={googleSignIn}>Login</button>      
    </div>
  )
}
