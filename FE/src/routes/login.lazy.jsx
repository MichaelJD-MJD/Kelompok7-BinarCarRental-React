import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import bannerImg from '../assets/login.png'
import logo from '../assets/icon/logo.png'
import "../styles/login.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../service/auth/auth.service";
import { setToken } from "../redux/slices/auth";

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      navigate({to: "/"});
    }
  }, [navigate, token]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // define the request body
    const body = {
      email, password,
    };

    // hit the login API with the data
    const result = await login(body);

    if(result.success){
      // set token to global state
      dispatch(setToken(result.data.token));

      // redirect to home
      navigate({to:"/"});
      return;
    }

    alert (result.message);
  }

  return (
    <div className="container-fluid login-container">
      <div className="row">
        <div className="col-lg-8 img-container">
          <img src={bannerImg} alt="Login Illustration" />
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="row mt-4">
              <h3>Welcome, Sign In to BCR</h3>
              <form className="mt-3" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary login-btn">
                  Sign in
                </button>
              </form>
              <p className="mt-2 text-center">
                Dont have an account? <Link to={"/register"}>Sign Up here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
