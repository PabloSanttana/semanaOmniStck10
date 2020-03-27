import React from 'react'
import { Veiw, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

 function Profile({ navigation }) {
   const githubUsername = navigation.getParam('github_username')
    return <WebView style={{flex: 1} } source={{ uri: 'https://login.sabia.ufrn.br/oauth/authorize/?client_id=FYBuvyZ3cEtiIb3q5HCf0efqGUHSG5mni3jXhAfW&redirect_uri=http://localhost:8081/&response_type=code'} }/>
}

export default Profile