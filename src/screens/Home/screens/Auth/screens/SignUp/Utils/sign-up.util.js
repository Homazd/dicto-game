import {supabase} from "../../../../../../../supabase"

export async function signUp(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp(
            {
                email,
                password,
            }
        );
        if (!error) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}