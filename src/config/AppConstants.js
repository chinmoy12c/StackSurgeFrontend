export const SERVER_IP = "http://127.0.0.1"
export const SERVER_URL = SERVER_IP + ":8080";
export const LOGIN_URL = SERVER_URL + "/processLogin";
export const REGISTER_URL = SERVER_URL + "/processRegister";
export const STACK_URL = SERVER_URL + "/getAvailableStacks";
export const USER_INSTANCES_URL = SERVER_URL + '/getUserInstances';
export const STOP_INSTANCE_URL = SERVER_URL + '/stopInstance';
export const LAUNCH_INSTANCE_URL = SERVER_URL + '/launchInstance';

export const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}
