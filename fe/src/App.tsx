import { Routes,Route } from 'react-router'
import './App'
import TermsOfService from './pages/TermsOfService/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Welcome</h1>}/>
      <Route path='terms-of-service' element={<TermsOfService/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
    </Routes>
    </>
  )
}

export default App
