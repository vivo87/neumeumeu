import FormComponent from 'client/components/FormComponent';
import {PropTypes} from 'react';

export default class RegisterForm extends FormComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUser = Object.assign({}, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        });
        this.props.handleRegistration(newUser);
    }

    render() {
        const {email} = this.state;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="register-form__group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email"
                        value={email}
                        required
                        onChange={this.onChange('email')}/>
                </div>

                <div className="register-form__group">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text"
                        required
                        onChange={this.onChange('username')}/>
                </div>

                <div className="register-form__group">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" required onChange={this.onChange('password')}/>
                </div>

                <div className="register-form__group">
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input id="confirmPassword" type="password" required onChange={this.onChange('confirmPassword')}/>
                </div>

                <button type="submit">Create account</button>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    handleRegistration: PropTypes.func.isRequired
};