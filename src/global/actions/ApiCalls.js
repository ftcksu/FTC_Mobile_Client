import { get, post } from "./API/RestService";


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
