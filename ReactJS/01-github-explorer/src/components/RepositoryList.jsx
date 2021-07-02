import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

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
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
} 