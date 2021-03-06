import axios from'axios';



const API_BASE_URL = "http://localhost:9090";


// const API_BASE_URL = "http://localhost:8090";

class APIService {
  // getUsers(){

  // return axios.get(API_BASE_URL+"/user");

  // }

  getUsersByEmail(email,password) {
    return axios.get(API_BASE_URL + "/user/email",  { params: { email: email,password : password} });
  }

  createUser(user) {
    return axios.post(API_BASE_URL + "/user" + "/user_details", user);
  }

  getUsersByEmailForProfile(email){
    return axios.post(API_BASE_URL+"/user/get_user/"+email);
  }

  changeUserPassword(emailId,pwd){
    return axios.get(API_BASE_URL+"/user/forgot_password",{params: {email: emailId, password: pwd}});
  }
  
  getCourses() {
    return axios.get(API_BASE_URL+"/course",{});
  }

  createCourse(course) {
    return axios.post(API_BASE_URL + "/course" + "/course_details", course);
  }

  createQuiz(course_id,quiz){
    return axios.post(API_BASE_URL + "/quiz/insertQuiz/"+course_id, quiz);
  }

  getQuiz(course_id)
  {
    return axios.get(API_BASE_URL+"/quiz/getQuiz/"+course_id);
  }

  // getEmployeeById(employeeId){

  // return axios.get(API_BASE_URL+ '/' + employeeId);

  // }

  // updateEmployee(employee,employeeId){

  // return axios.put(API_BASE_URL+ '/' + employeeId,employee);

  // }

  // deleteEmployee(employeeId){

  // return axios.delete(API_BASE_URL+ '/' + employeeId);

  // }
}

export default new APIService();
