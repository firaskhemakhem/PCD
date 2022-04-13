import * as React from 'react';
import {Component} from 'react';

class Forgetpassword extends Component{
    render (){
        return(
            <div>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mb-5">
                                <h2 class="heading-section">Forget Password</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-5">
                                <div class="login-wrap p-4 p-md-5">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-user-o"></span>
                            </div>
                            <h3 class="text-center mb-4">Have an account?</h3>
                                    <form action="#" class="login-form">
                                <div class="form-group">
                                    <input type="text" class="form-control rounded-left" placeholder="Username" required></input>
                                </div>
                            <div class="form-group d-flex">
                            <input type="password" class="form-control rounded-left" placeholder="Password" required></input>
                            </div>
                            <div class="form-group d-md-flex">
                                <div class="w-50">
                                    <label class="checkbox-wrap checkbox-primary">Remember Me
                                                <input type="checkbox" checked></input>
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Get Started</button>
                            </div>
                        </form>
                        </div>
                            </div>
                        </div>
                    </div>
	            </section>
            </div>
        )
    }
}
export default Forgetpassword;