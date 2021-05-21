import {connect} from "react-redux";
import {LeftMenu} from "./LeftMenu";

const mapStateToProps = (storeState: any) => {
    let selected = "";
    const location: string = storeState.router.location.pathname;
    if (location.substr(0, 8) == "/profile") {
        selected = "profile";
    } else if (location.substr(0, 7) == "/orders") {
        selected = "orders";
    } else if (location.substr(0, 13) == "/my-purchases") {
        selected = "my-purchases";
    }
    return {
        selected
    }
};

export const ConnectedLeftMenu = connect(mapStateToProps)(LeftMenu);