const Form = () => {
    return (
      <div>
      <form className="form1" id="signUp">
        <input className="un " type="text" align="center" placeholder="Username" id="name" />
        <input className="email" type="text" align="center" placeholder="Email" id="email"/>
        <input className="pass" type="password" align="center" placeholder="Password" id="password" />
        <a className="submit" align="center" type="submit" id="signUpBtn" onclick="signUp()">Sign Up</a>
        </form>
        </div>
    )
}

export default Form;