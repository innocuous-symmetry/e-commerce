import { useEffect, useState } from "react";
import { useSupabase } from "../../supabase/SupabaseContext"
import Page from "../_ui/Page/Page";
import UpdateUserInfo from "./SettingsWidgets/UpdateUserInfo";

export default function UserSettings() {
    const supabase = useSupabase();
    const [activeSections, setActiveSections] = useState({
        userInfo: false
    });

    return (
        <Page>
            <h1>User Settings!</h1>
            { activeSections.userInfo && <UpdateUserInfo /> }
        </Page>
    )
}