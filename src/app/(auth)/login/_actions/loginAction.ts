'use server'

import { signIn } from '../../../../../auth'

export async function loginAction(_prevState: any, formData: FormData) {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    await signIn('credentials', {
        email,
        password,
        redirect: false,
    })

}