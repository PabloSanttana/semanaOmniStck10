import React, { useState, useEffect} from 'react';
import api from './services/api'

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [devs, setDevs] = useState([])

  async function loadDevs() {
    const response = await api.get('/devs')

      setDevs(response.data)
      console.log('oi')
  }

    //buscar os dev para colocar na lista nunca esquecer []
    useEffect(()=>{
       
        // chamar a function
        loadDevs()

    },[])

    async function handleAddDev(data) {
   
      const response = await api.post('/devs', data )
     
      // colonado o outro deve natela quandos nos cadastramos ele 
      setDevs([...devs, response.data])
    }


    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
               <DevForm onSubmit={handleAddDev}/>
            </aside>
            <main>
                <ul>      
                  {devs.map(dev=>(
                       <DevItem key={dev._id} dev={dev}/>
                     
                  ))}

                </ul>
            </main>
        </div>
    );
}

export default App;
