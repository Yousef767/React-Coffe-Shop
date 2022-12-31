import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component{
    render() {
        return (
            <section className="inner">
                <span className="message">Login</span>
                <div className="form-inner">
                    <form>
                        <input type={'text'} placeholder='Enter E-mail'></input>
                        <input type={'password'} placeholder='Enter Password'></input>
                        <input type={'submit'} value='Login'></input>
                    </form>
                    <div className="sandl">
                        <span>Don't Have Account ? </span>
                        <Link to={'/signup'}>Sign Up</Link>
                    </div>
                </div>
            </section>
        )
    }
}
class SignUp extends Component{
    file = () => {
        let inputImage = document.querySelector("input[type=file]").files[0];
        let imageName = document.getElementById("imageName")
        imageName.innerText = inputImage.name;
    }
    render() {
        return (
            <section className="inner">
                <span className="message">Sign Up</span>
                <div className="form-inner">
                    <form>
                        <input type={'text'} placeholder='Enter Your Name'></input>
                        <input type={'text'} placeholder='Enter E-mail'></input>
                        <input type={'password'} placeholder='Enter Password'></input>
                        <div className="file">
                            <label htmlFor="imgInput">
                                Select Account Image
                                <i className="fa-light fa-camera-retro"></i>
                                <input id="imgInput" onChange={this.file} type="file" accept="image/*" />
                                <span id="imageName"></span>
                            </label>
                        </div>
                        <input type={'submit'} value='Sign Up'></input>
                    </form>
                    <div className="sandl">
                        <span>Already Have Account ? </span>
                        <Link to={'/login'}>Login</Link>
                    </div>
                </div>
            </section>
        )
    }
}

export { Login, SignUp }