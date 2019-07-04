import { get, post, put } from "./API/RestService";


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
