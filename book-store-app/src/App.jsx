import { useEffect, useState } from 'react'
import SignupPage from './pages/Signup'
import SigninPage from './pages/Signin'
import { app } from './firebase'
import './App.css'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const auth = getAuth(app)

function App() {
  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth,   // this function will take the first parameter as auth which we imported from the firebase and second parameter will be the email and the third will be the password 
  //     'rohan.dev@gmail.com', 
  //     'Rohan@123'
  //   ).then((value) => console.log(value))
  // }

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        // Yes you are logged in
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
  }, [])

  if(user == null){
    return (
      <div>
        <SignupPage/>
        <SigninPage/>
      </div>
    )
  }
  

  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl'>Hello {user.email}</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => signOut(auth)}
      >LogOut</button>
    </div>
  )

  



//   const firebase = useFirebase()
//   console.log('Firebase' , firebase);
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   return (
//     <div className='flex flex-col items-center'>
//       <h1 className="mt-4 mb-6 font-bold text-3xl">Firebase</h1>
//             <div className="flex flex-col w-2/6">
//                 <div>
//                     <label 
//                         className="block mb-2 text-sm font-medium text-gray-900"
//                         htmlFor="">Email</label>
//                     <input
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         type="email" required placeholder="Enter your email here ..."/>
//                 </div>
//                 <div>
//                     <label 
//                         className="block mb-2 text-sm font-medium text-gray-900"
//                         htmlFor="">Password</label>
//                     <input
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         type="password" required placeholder="Enter your password here ..."/>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                           firebase.signupUserWithEmailAndPassword(email, password)
//                           firebase.putData('users/' + "rohan", {email, password})
//                         }}
//                         type="button" 
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-2"
//                     >
//                         SignUp
//                     </button>
//                 </div>
                
//             </div>
//     </div>
//   )
}
export default App;
