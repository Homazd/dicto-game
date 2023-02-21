
import {supabase} from "../../../../../../../supabase";
export async function getUser(email) {
    try {
        const { data, error } = await supabase.from("users").select();

        if (!error) {
            for (let i = 0; i < data.length; i++) {
                const currentData = data[i];
                console.log(currentData)
                if (currentData.email === email) {
                    if (!localStorage.getItem("username")) {
                        localStorage.setItem("username", currentData.user_name)
                        localStorage.setItem("initialized", "true");
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }

}