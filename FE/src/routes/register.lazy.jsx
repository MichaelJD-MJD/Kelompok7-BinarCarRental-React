import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import bannerImg from "../assets/login.png";
import logo from "../assets/icon/logo.png";
import "../styles/login.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { register } from '../service/auth/auth.service';
import { setToken } from '../redux/slices/auth';

export const Route = createLazyFileRoute('/register')({
  component: Register,
})

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(undefined);

  useEffect(() => {
    // get token from local storage
    if (token) {
      navigate({to: "/"});
    }
  }, [token, navigate]);

  const onSubmit= async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("Password and password confirmation must be same!");
    }

    // create request body
    const request = {
      name,
      email,
      password,
      profilePicture,
    };
    const result = await register(request);
    if(result.success) {
      // save token to local storage
      localStorage.setItem("token", result.data.token);
      // set token to global state
      dispatch(setToken(result.data.token));

      // redirect to home
      navigate({ to: "/" });
      return;
    }

    alert(result.message);
  };

  return (
    <div className="container-fluid login-container">
      <div className="row">
        {/* Image */}
        <div className="col-lg-8 img-container">
          <img src={bannerImg} alt="Login Illustration" />
        </div>
        {/* Form */}
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="row mt-3">
              <h3>Welcome, Sign Up to BCR</h3>
              {/* Form */}
              <form className="mt-2" onSubmit={onSubmit}>
                <div className="mb-2">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    aria-describedby="nameHelp"
                    required
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
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
                <div className="mb-2">
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
                <div className="mb-2">
                  <label htmlFor="inputConfirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="inputProfilePicture" className="form-label">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputProfilePicture"
                    required
                    onChange={(event) => {
                      setProfilePicture(event.target.files[0]);
                    }}
                    accept='".jpg,.png'
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary login-btn d-inline-block"
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-2 text-center">
                Already have an account? <Link to={"/login"}>Sign In here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
