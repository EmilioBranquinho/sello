'use server'

import { signIn } from '../../../../../auth'

export async function loginAction(_prevState: any, formData: FormData) {

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
        await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        return {
            success: true,
        }
    } catch (error) {
        if(error.type === 'CredentialsSignin'){
            return {
                success: false,
                message: 'Erro, verifique as suas credenciais e tente novamente'
            }
        }

        return {
            success: false,
            message: 'Ocorreu um erro inesperado, tente novamente mais tarde'
        }
    }


}