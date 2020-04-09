import * as HttpClient from './HttpClient';


export function getExample() {
    return HttpClient.sendGet('team').then(data => {
        console.log(data);
    });
}

export function postExample() {
    return HttpClient.sendPost('team', {Id:'546c776b3e23f5f2ebdd3b01'}).then(data => {
        console.log(data);
    });
}

export function putExample() {
    return HttpClient.sendPut('team/546c776b3e23f5f2ebdd3b01', {Id:'546c776b3e23f5f2ebdd3b01'}).then(data => {
        console.log(data);
    });
}

export function deleteExample() {
    return HttpClient.sendDelete('team/546c776b3e23f5f2ebdd3b01').then(data => {
        console.log(data);
    });
}