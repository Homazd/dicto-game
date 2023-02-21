import {supabase} from "../../../../../../../supabase";

export async function signInUser(email, password) {
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (!error) {
            return data
        }
    } catch (e) {
        console.log(e)
    }
}