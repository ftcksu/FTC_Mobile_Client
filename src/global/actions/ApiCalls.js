const baseURL = "http://192.168.100.126:8080/api"
export function loginAttempt(universityID, password) {
    return fetch(baseURL + "/auth/login", {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    student_id: universityID,
    password: password,
  }),
})
}

