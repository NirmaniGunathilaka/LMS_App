
import '../Css/TeamApp.css';
import img from '../images/Team.png';

function TeamApp() {
  return (
    <div >
      <h1 align="center" style={{color:'#02706B',fontSize:"50px"}}>Team Details</h1>
      <div id="divleft">
           <img src={img} width="500px" alt=""></img>
      </div>
      <div id="divright">
        <h1>Can Contact Us @</h1>
        <ul style={{ fontSize: "20px"}}>
          <li><b>Vaishnavi Kancharla</b> : vaishnavi_kancharla@persistent.com</li>  
          <li><b>Nirmani Gunathilaka</b> : nirmani_gunathilaka@persistent.com</li>
          <li><b>Srilasya B</b> : srilasya_b@persistent.com</li>
          <li><b>Vishalakshi Sonathi</b> : vishalakshi_sonathi@persistent.com</li>
          <li><b>Vikas Bhumaji</b> : vikas_bhumaji@persistent.com</li>
          <li><b>Viraj Shetty</b> : viraj_shetty@persistent.com</li>
        </ul>
      </div>
    </div>
  );
}

export default TeamApp;
