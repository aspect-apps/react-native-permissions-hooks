/**
 * 
 * @param {string} permission 
 * @param {array} update 
 */
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useEffect, useState} from 'react';

export function useCheck(permission, update = []){
    const [result, setResult] = useState({result:null, type:'unknown'})
    useEffect(() => {
        check(permission).then((result) => setResult({result:result, type:'known'}))
  .catch((error) => {
    console.log(error)
});
    },update)

    return result;
}