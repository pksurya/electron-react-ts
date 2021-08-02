import * as React from "react";
import { withRouter } from "react-router-dom";
import WebLayout from "../layout/layout";
import * as PostService from "../../redux/actions/post";
import { useActions } from "../../redux/actions";
import styles from "./about.module.scss";

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
                <h2 className={styles.h2}>Location And Areas is at home</h2>
                <p>Welcome to About page</p>
                {elec &&
                    <button className="btn btn-primary" onClick={() => postService.testIPC("About Us")}>Call IPC</button>
                }
            </WebLayout>
        </>

    )
}


export default withRouter(AboutComponent)