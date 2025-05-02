'use server'
import * as auth from "@/app/auth"

export const signIn = async () => {
    return auth.signIn();
}
