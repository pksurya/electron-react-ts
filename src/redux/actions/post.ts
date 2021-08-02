import axios from "axios";
//import axios from '../interceptor';
import { PostActions } from "../model";
import { constant } from "../../constant";

declare var window: any;

// how to import the remote module in a React component?
// const electron = window.require('electron');
// const remote = electron.remote
// const {BrowserWindow,dialog,Menu} = remote

// Importing the net Module from electron remote
// const net = electron.remote.net;

export function addPost(auth: any) {
    return async (dispatch: Function, getState: Function) => {
        function onSuccess(success: any) {
            dispatch({ type: PostActions.ADD_POST, payload: success });
            return success;
        }
        function onError(error: any) {
            dispatch({ type: PostActions.ADD_ERROR, payload: error });
            return error;
        }
        try {
            const success: any = await axios.post(`${constant.baseAPIurl}api/post/add`, auth);
            onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    };
}


export function testIPC(page: string) {
    return async (dispatch: Function, getState: Function) => {
        var ipc;
        if ((<any>window).require) {
            try {
                ipc = (<any>window).require("electron").ipcRenderer;

                ipc.once("getFilesResponse", (event: any, arg: any) => {
                    //resolve(arg);
                });
                ipc.on('asynchronous-reply', (event: any, arg: any) => {
                    console.log(arg)
                });

                //this ipc renderer will send the signal to the ipcMain listener, mentioned in file electron.js
                ipc.send("testIPC", [page]);
            }
            catch (error: any) {
                throw error;
            }
        }
    }
}

export function getPost() {
    return async (dispatch: Function, getState: Function) => {
        function onSuccess(success: any) {
            dispatch({ type: PostActions.ADD_POSTS, payload: success });
            return success;
        }
        function onError(error: any) {
            dispatch({ type: PostActions.ADD_ERROR, payload: error });
            return error;
        }
        try {
            // var ipc;
            // if ((<any>window).require) {
            //     try {
            //         ipc = (<any>window).require("electron").ipcRenderer;

            //         ipc.once("getFilesResponse", (event: any, arg: any) => {
            //             //resolve(arg);
            //         });
            //         ipc.on('asynchronous-reply', (event: any, arg: any) => {
            //             console.log(arg) // prints "pong"
            //         })
            //         ipc.send("createProfile", ["hii"]);

            //         const electron = (<any>window).require('electron')
            //         const net = electron.remote.net;
            //         const request = net.request({
            //             method: 'GET',
            //             protocol: 'http:',
            //             hostname: 'chatman-api.dritalconnect.com',
            //             path: '/api/area/list',
            //             redirect: 'follow'
            //         });
            //         request.on('response', (response: any) => {
            //             console.log(response);
            //             console.log(`STATUS: ${response.statusCode}`);
            //             console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            //             let data = '';
            //             response.on('data', (chunk: any) => {
            //                 data += chunk;
            //                 //console.log(`BODY: ${chunk}`);
            //                 let d = JSON.parse(data);
            //                 console.log(d);
            //                 onSuccess(d);
            //             });
            //             response.on('end', async () => {
            //                 console.log(JSON.parse(data));
            //             });
            //         });
            //         request.on('finish', () => {
            //             console.log('Request is Finished')
            //         });
            //         request.on('abort', () => {
            //             console.log('Request is Aborted')
            //         });
            //         request.on('error', (error: any) => {
            //             console.log(`ERROR: ${JSON.stringify(error)}`)
            //         });
            //         request.on('close', (error: any) => {
            //             console.log(`ERROR: ${JSON.stringify(error)}`)
            //         });
            //         request.setHeader('Content-Type', 'application/json');
            //         request.end();

            //     } catch (error) {
            //         throw error;
            //     }
            // } else {
            //     console.warn("Could not load electron ipc");
            // }


            let url = "http://chatman-api.dritalconnect.com/api/area/list";
            const success: any = await axios.get(url);
            console.log(success);
            onSuccess(success);

        } catch (error) {
            return onError(error);
        }
    };
}

export function updatePost(auth: any) {
    return async (dispatch: Function, getState: Function) => {
        function onSuccess(success: any) {
            dispatch({ type: PostActions.UPDATE_POST, payload: success });
            return success;
        }
        function onError(error: any) {
            dispatch({ type: PostActions.ADD_ERROR, payload: error });
            return error;
        }
        try {
            const success: any = await axios.put(`${constant.baseAPIurl}api/post/update/${auth._id}`, auth);
            onSuccess(auth);
        } catch (error) {
            return onError(error);
        }
    };
}

export function deletePost(auth: any) {
    return async (dispatch: Function, getState: Function) => {
        function onSuccess(success: any) {
            dispatch({ type: PostActions.DELETE_POST, payload: success });
            return success;
        }
        function onError(error: any) {
            dispatch({ type: PostActions.ADD_ERROR, payload: error });
            return error;
        }
        try {
            const success: any = await axios.delete(`${constant.baseAPIurl}api/post/delete/${auth._id}`, auth);
            onSuccess(auth);
        } catch (error) {
            return onError(error);
        }
    };
}

