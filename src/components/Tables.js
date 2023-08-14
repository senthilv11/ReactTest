import { useEffect, useState } from 'react';

function Tables() {
    const [defaultJson] = useState({
        "origin": "125.178.68.224",
        "json": {
            "address": {
                "city": "Gwenborough",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                },
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "zipcode": "92998-3874"
            },
            "company": {
                "tagline": "harness real-time e-markets",
                "catchPhrase": "Multi-layered client-server neural-net",
                "name": "Romaguera-Crona"
            },
            "email": "Sincere@april.biz",
            "id": 1,
            "name": "Leanne Graham",
            "phone": "1-770-736-8031 x56442",
            "username": "Bret",
            "website": "hildegard.org"
        },
        "url": "http://httpbin.org/post?format=json&username=Bret"
    });

    const [updateJson, setUpdatedJson] = useState([]);

    const checkObject = (getData, getKeyName = 'data') => {
        console.log('getKeyname - ' + getKeyName)
        let jsonData = Object.assign({}, getData);
        const keyCount = Object.keys(jsonData).length;
        let tempCount = 0;
        let tempList = [];
        Object.keys(jsonData).forEach((key) => {
            if (typeof jsonData[key] === 'object') {
                tempCount++;
                let tempObj = Object.assign({}, jsonData[key]);
                tempList.push({ [key]: tempObj });
                delete jsonData[key];
            } else {
                tempCount++;
            }
        })
        if (keyCount === tempCount) {
            setUpdatedJson((prevUpdateJson) => [...prevUpdateJson, { [getKeyName]: jsonData }]);
        }
        for (let i = 0; i < tempList.length; i++) {
            for (let key in tempList[i]) {

                checkObject(tempList[i][key], key)
            }
        }
    }

    useEffect(() => {
        setUpdatedJson([])
        checkObject(defaultJson)
        setTimeout(() => {
            console.log(JSON.stringify(updateJson))
        }, 5000);
    }, []);

    const TableDataRender = ({keyName,data,index}) => {
        return(
            <>
                {Object.keys(data).map(key =>(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{data[key]}</td>
                </tr>
                ))}
            </>
        )
    }
    return (
        <>
            
            {updateJson.length > 0 && updateJson.map((json, index) => (
                
                <div className={`table-div table-level-${index}`}  key={index}>
                    {Object.keys(json).map(key => (<h3>{key}</h3>))}
                    <table border={0} >
                        <thead>
                        <tr>
                            <th>key</th>
                            <th>value</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.keys(json).map(key=>(<TableDataRender keyName={key} data={json[key]} index={index} />))}
                        </tbody>
                    </table>

                    
                </div>
            ))}
        </>
    )
}

export default Tables;