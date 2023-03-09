import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { authorization } from '../config/shared/shared'
const customRoutes = [
  {
    title: "Register",
    component: <div></div>,
    path: '/Register',
    authorization: authorization.HIDDEN
  },
  {
    title: "Login",
    component: <div></div>,
    path: '/login',
    authorization: authorization.HIDDEN
  },
  {
    title: "Home",
    component: <div></div>,
    path: '/',
    avatar: <AiOutlineHome />,
    authorization: authorization.SHOW
  },
  {
    title: "Profile",
    component: <div></div>,
    path: '/profile',
    avatar: <CgProfile />,
    authorization: authorization.SHOW
  }
]

export default customRoutes