import React, {useState, useEffect} from 'react';
import firebase from "./utils/firebaseapp";
import Val from "./Val";

export default function List(){
    const [valList, setValList] = useState();
    useEffect(() => {
         const dref = firebase.database().ref('Todo');
    dref.on('value', (snapshot) => {
        const vals = snapshot.val();
        const valList = [];
        for(let i in vals){
            valList.push({i,...vals[i]});
        }
        console.log(valList);
        setValList(valList);
    });
    }, []);

    return(
        <div>{valList ? valList.map((val, index) => <Val val = {val} key = {index}/>) : ''}</div>
    );
}
