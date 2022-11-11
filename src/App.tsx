import { useState } from 'react';
import './App.css';
import { Notification } from './notification'

function App() {
  const [getNotifications] = useState(
    [
      { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia', url: 'https://google.com',textButton:'Ver' },
      { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia 2', url: 'https://google.com',textButton:'Ver Mais' },
      { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia 3', url: 'https://google.com',textButton:'Ver Detalhes' },
    ]
  )
  return (
    <div className="App">
      <Notification notifications={getNotifications}></Notification>
      <Notification notifications={getNotifications}></Notification>
      <Notification notifications={getNotifications}></Notification>
    </div>
  );
}

export default App;
