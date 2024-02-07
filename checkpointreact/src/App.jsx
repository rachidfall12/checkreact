import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/navbar';
import Titre from './Components/Title/titre';
import Carte from './Components/Productsproprietes/carte'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
      <Header />
         </div>
         <section id='Products'>
         <h1 className='text-center text-light my-3'>PRODUCTS</h1>
        
      <div>
      <Titre />
        </div>
        <div>
      <Carte className='card'/>
        </div>
       </section>
    </div> 
  )
}


export default App
