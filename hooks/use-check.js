import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

export function useCheck(permission, update = null){
    const [result, setResult] = useState({result:null, type:'unknown'})
    useEffect(() => {
        check(permission).then((result) => setResult({result:result, type:'known'}))
  .catch((error) => {
    console.log(error)
});
    },update)
    
    return result;
}