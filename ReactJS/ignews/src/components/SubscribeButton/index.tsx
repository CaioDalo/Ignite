import { getStripeJs } from '../../services/stripe-js'
import { api } from '../../services/api'
import { useSession, signIn } from "next-auth/react"


import styles from "./styles.module.scss"

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
    const session = useSession()

    async function handleSubscribe() {
        if(!session) {
            return signIn('github')
        }

        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId: sessionId})

        } catch (error) {
            alert(error.message)
            return
        }
    }

    return (
        <button type="button" 
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}

