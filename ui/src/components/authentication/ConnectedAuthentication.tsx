import {Authentication, AuthRequest} from "./Authetication";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {loginAction} from "./saga";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submit: (authRequest: AuthRequest) => {
            console.log(authRequest);
            dispatch(loginAction(authRequest));
        }
    }
};

export const ConnectedAuthentication = connect(null, mapDispatchToProps)(Authentication);