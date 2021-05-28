import {Purchase} from "./Purchase";
import {connect} from "react-redux";

const mapStateToProps = (storeState: any) => {
    return {
        ...storeState.purchase
    }
};

export const ConnectedPurchase = connect(mapStateToProps)(Purchase);