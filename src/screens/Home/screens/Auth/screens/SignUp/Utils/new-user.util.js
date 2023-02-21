import {supabase} from "../../../../../../../supabase";

export async function newUser(username, email) {
    try{
        const { error } = await supabase.from("users").insert({
            id: randomString(),
            user_name: username,
            email
        })
        if (!error) {
            localStorage.setItem("initialized", "true");
            localStorage.setItem("username", username);
        }
    }catch(err){
        console.log(err)
    }
}