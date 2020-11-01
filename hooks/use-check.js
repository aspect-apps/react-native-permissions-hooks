/**
 * 
 * @param {string} permission 
 * @param {array} update 
 */
import {check,checkMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useEffect, useState} from 'react';

export function useCheck(permission, update = [], isMultiple = true){
    const [result, setResult] = useState({result:null, type:'unknown'})
    if(!notMultiple){
        useEffect(() => {
        check(permission).then((result) => setResult({result:result, type:'known'}))
    .catch((error) => {
    console.log(error)
});
    },update)
}else{
        useEffect(() => {
        checkMultiple(permission).then((result) => setResult({result:result, type:'known'}))
    .catch((error) => {
    console.log(error)
});
    },update)
}

    return result;
}