import Head from 'next/head'
import styles from './styles.module.scss'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Prisma: uma das melhores coisas que já aconteceu no ecossistema?</strong>
                        <p>Um breve arquivo sobre a origem da ferramenta que facilitou o acesso de databases e ampliou produtividade para o ecossistema JavaScript/TypeScript</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Prisma: uma das melhores coisas que já aconteceu no ecossistema?</strong>
                        <p>Um breve arquivo sobre a origem da ferramenta que facilitou o acesso de databases e ampliou produtividade para o ecossistema JavaScript/TypeScript</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Prisma: uma das melhores coisas que já aconteceu no ecossistema?</strong>
                        <p>Um breve arquivo sobre a origem da ferramenta que facilitou o acesso de databases e ampliou produtividade para o ecossistema JavaScript/TypeScript</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.

    return {
        props: {

        }
    }
}