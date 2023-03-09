import { createContext, useContext, useEffect, useState } from "react";
import jwtAxios, { setAuthToken } from "../service/api/jwt-auth";


const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({ children }) => {
  const [userData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    token: null
  });

  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setJWTAuthData({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token)
        jwtAxios
        .get('/auth/me')
        .then(({data}) =>
          setJWTAuthData({
            user: data,
            isLoading: false,
            isAuthenticated: true,
          }),
        )
        .catch(() =>
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
          }),
        );
    };

    getAuthUser();
  }, []);

  // const dispatch = useDispatch();

  // const signInUser = async ({firstName, lastName, phoneNumber, email, password}) => {
  //   dispatch({type: FETCH_START});
  //   try {
  //     const {data} = await jwtAxios.post('auth', {email, password});
  //     localStorage.setItem('token', data.token);
  //     setAuthToken(data.token);
  //     const res = await jwtAxios.get('/auth');
  //     setJWTAuthData({user: res.data, isAuthenticated: true, isLoading: false});
  //     dispatch({type: FETCH_SUCCESS});
  //   } catch (error) {
  //     setJWTAuthData({
  //       ...userData,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     });
  //     dispatch({type: FETCH_ERROR, payload: error.message});
  //   }
  // };

  // const Login = async({email, password})=> {

  // }

  return (
    <JWTAuthContext.Provider
      value={{
        ...userData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          // signUpUser,
          // signInUser,
          // logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};

export default JWTAuthAuthProvider