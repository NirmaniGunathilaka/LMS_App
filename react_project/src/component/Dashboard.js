
import '../Css/Dashboard.css';
import img from '../images/persistent image1.jpg';

function Dashboard() {
  return (
    <div class="head">
    <h1>Welcome to Persistent LMS</h1>
    
    <div class="navbar">
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#" target="_blank">courses</a></li>
         <li><a href="#" target="_blank">Notes</a></li>
         <li><a href="#" target="_blank">Videos</a></li>
         <li><a href="#" target="_blank">quizes</a></li>
         <li><a href="#" target="_blank">About us</a></li>
         <li><a href="#" target="_blank">Contact us</a></li>
         
         
         <li><a href="https:/yahoo.com" target="_blank">Login</a></li>
        
         
         
       </ul>
    
    </div>
    <div class="login">
     
      <img src={img} alt=""></img>
    </div>
    </div>
  );
}

export default Dashboard;
