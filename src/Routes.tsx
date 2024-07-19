import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coworkregistration from './components/cowork-registration';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Aboutus from './components/about-us';
import Forbussiness from './components/for-bussiness';
import Forworkspace from './components/for-workspace';
import Forcustomer from './components/for-customer';
import Foremployee from './components/for-employee';
import Emailinvitation from './components/email-invitation';
import Searching from './components/searching';
import Beforeloginlayout from './beforlogin-layout';
import Afterloginlayout from './afterlogin-layout';
import Workspacedetails from './components/workspace-details';
import Personalinformation from './components/personal-information';


function App() {
return (
<Router>
    <Routes>
        <Route path="/email-invitation" element={<Emailinvitation/>} />
        <Route path="/" element={<Beforeloginlayout />}>
          <Route path="/cowork-registration" element={<Coworkregistration />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/for-business" element={<Forbussiness />} />
          <Route path="/for-workspace" element={<Forworkspace />} />
          <Route path="/for-costomer" element={<Forcustomer/>} />
          <Route path="/for-employee" element={<Foremployee/>} />
        </Route>
        <Route path="/" element={<Afterloginlayout />}>
          <Route path="/searching" element={<Searching/>} />
          <Route path="/details" element={<Workspacedetails/>} />
          <Route path="/personal-information" element={<Personalinformation/>} />
        </Route>
    </Routes>
</Router>
  )
}
export default App
