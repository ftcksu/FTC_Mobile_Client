import { get, post, put, patch, remove } from "./API/RestService";


export function loginAttempt(universityID, password) {

  const body = JSON.stringify({
    student_id: universityID,
    password: password,
  })

  return post('/auth/login', body)
}

export function getLeaderboard() {
  return get('/point/leaderboard');
}

export function getLoggedInUserInfo() {
  return get('/auth/userInfo');
}

export function getEventList(){
  return get('/event/all');
}

export function getEventDetails(id){
  return get('/event/'+id);
}

export function enrollInEvent(event_id) {
  return put('/event/enroll/'+event_id)
}

export function getAllUsers(){
  return get('/user/all');
}

export function getUserDetails(id) {
  return get('/task/user/'+id)
}

export function getMyEvent(){
  return get('/event/user');
}

export function addEvent(body){
  this.deleteEventUnWantedData(body);
  return post('/event/create', JSON.stringify(body));
}



export function patchEvent(body){
  this.deleteEventUnWantedData(body);
  console.log(body);
  return patch('/event/edit', JSON.stringify(body));
}

export function removeEvent(id){
  return remove('/event/archive/'+id)
}

deleteEventUnWantedData = (body) =>{
  body.registered_users = body.registered_users.map(user => user.id) // we only need the id of the users, makes the request lighter
  delete body.users // we don't need users
}

