import './App.css'
import { Amplify } from 'aws-amplify'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'
import { Provider } from 'react-redux'

import awsConfig from './aws-exports'
import Header from './components/Header/Header'
import SongsContainer from './containers/Song/SongsContainer'
import store from './store'
import Player from './containers/Player/Player'
import { enableLogger } from './datadog'

Amplify.configure(awsConfig)

enableLogger()

const App = () => {

  return (
    <Provider store={store}>
      <Authenticator.Provider>
        <main>
          <Header />
          <SongsContainer />
          <Player />
        </main>
      </Authenticator.Provider>
    </Provider>
  )
}

export default withAuthenticator(App)
