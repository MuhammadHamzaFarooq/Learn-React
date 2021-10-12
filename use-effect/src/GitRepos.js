import React, { useEffect,useState } from 'react';

const GitRepos = () => {
    const [data, setData] = useState([{}])
    useEffect(() => {
        async function repoGetData() {
            let apiResopnse = await fetch('https://api.github.com/users/MuhammadHamzaFarooq/repos');
            let jsonData = await apiResopnse.json();
            console.log(jsonData)
            setData(jsonData);
        }
        repoGetData()
    }, []);

    
    return (
        <div>
            <h1>All Git Reops Name</h1>
            <ul>
                {
                    data.map((resObj, index) => {
                        return (
                            <li key={index}>
                             
                                {resObj.name}
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default GitRepos
