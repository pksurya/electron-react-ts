import * as React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useActions } from "../actions";
import WebLayout from "../components/common/layout";
import { RootState } from "../reducers";
import * as PostService from "../actions/post";
import { useEffect } from "react";
var userAgent = navigator.userAgent.toLowerCase();

type Props = {
}

const HomeComponent: React.FC<Props> = () => {
    const store = useSelector((state: RootState) => state.post);
    const postService = useActions(PostService);

    //Flag to chk whether the application is opened in browser or on any desktop/OS
    let elec = false;
    if (userAgent.indexOf(' electron/') > -1) {
        elec = true;
    }
    useEffect(() => {
        window.document.title = `Home | Posts List`;
        postService.getPost();
    }, [])
    return (
        <>
            <WebLayout>
                <p>Welcome to Home page</p>

                <div className="container">
                    <h2>Location And Areas</h2>
                    <p>CRUD operaion for Location and Area</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store && store.posts && store.posts.map((x: any, i: number) =>
                                <tr key={i}>
                                    <td>{x.name}</td>
                                    <td>{x.name}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    {/* This button will only be shown when opened on desktop */}
                    {elec &&
                        <button className="btn btn-primary" onClick={() => postService.testIPC("Home")}>Call IPC</button>
                    }
                </div>
            </WebLayout>
        </>
    )
}


export default withRouter(HomeComponent)