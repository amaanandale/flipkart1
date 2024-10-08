import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSignUp = async () => {
    // navigate("/login");
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      agreed: checked,
    };
    if (password != confirmPassword) {
      setError("password dont matched");
      return;
    }
    if (!checked) {
      setError("please agree the below condition");
      return;
    }

    console.log(payload);

    //Make api call to backend
    // fetch
    // axios
    //react query
    //rtk query

    //API methods: GET,POST,PUT,DELETE,PATCH
    try {
      setLoading(true);
      const res = await fetch("http://subayeel.com/articles", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setpassword("");
    // setChecked(false);
  };

  useEffect(() => {
    setError("");
  }, [password, confirmPassword, checked]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="border flex flex-col p-6 shadow-lg bg-white rounded-md gap-5 ">
        <h1 className=" text-3xl font-semibold flex justify-center">SignUp</h1>
        <div className="flex flex-row gap-5 ">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded-md"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={2}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded-md"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={2}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="border p-2  rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={2}
        />
        <div className="flex flex-col gap-2">
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required={2}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={2}
          />
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <input
            type="checkbox"
            className="pb-1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />

          <p className="text-sm pb-1">
            I accept the Terms of Use and Privacy Policy
          </p>
        </div>
        {error ? (
          <p className="text-red-600 flex justify-center">{error}</p>
        ) : (
          ""
        )}
        <button
          onClick={handleSignUp}
          className="text-white bg-blue-600 rounded-md px-4 mx-4 py-2 mt-2"
          disabled
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <p className="flex justify-center">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
