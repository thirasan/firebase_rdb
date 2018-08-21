import database from '@/firebase/firebase.js'

export const toggleSignUp = (email, password, firstname, lastname, phoneNumber) => {
  database.ref('users').push({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    phone_number: phoneNumber
  })
}

export const userLists = async () => {
  let list = []
  await database.ref('users').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key
      var childData = childSnapshot.val()
      let user = {key: childKey, value: childData}
      list.push(user)
      // ...
    })
  })
  return list
}
