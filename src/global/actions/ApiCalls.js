const baseURL = "http://127.0.0.1:8000/api"
export function loginAttempt(universityID, password) {
  console.log(baseURL + "/auth/login");
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

