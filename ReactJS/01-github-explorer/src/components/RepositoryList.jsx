import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
    name:'unform2', 
    description: 'Forms in React',
    link: 'https://github.com.br/unform/unform'
}

export function RepositoryList() {

    const urlApi = 'https://api.github.com/orgs/rocketseat/repos'

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}