import * as React from "react";
import { withRouter } from "react-router-dom";
import WebLayout from "../components/common/layout";
import * as PostService from "../actions/post";
import { useActions } from "../actions";
var userAgent = navigator.userAgent.toLowerCase();
type Props = {
}

const AboutComponent: React.FC<Props> = () => {
    const postService = useActions(PostService);
    let elec = false;
    if (userAgent.indexOf(' electron/') > -1) {
        elec = true;
    }
    return (
        <>
            <WebLayout>
                <p>Welcome to About page</p>
                {elec &&
                    <button className="btn btn-primary" onClick={() => postService.testIPC("About Us")}>Call IPC</button>
                }
            </WebLayout>
        </>

    )
}


export default withRouter(AboutComponent)