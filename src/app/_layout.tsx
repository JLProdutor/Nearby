import { Stack } from "expo-router";
import { colors } from "@/styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { Loading } from "@/components/loading";

export default function Layout() {
    const [loadedFonts] = useFonts ({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    })

    if(!loadedFonts)
    {
        return <Loading />
    } else {

    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack 
            screenOptions={{ 
                headerShown: false,
                contentStyle: { backgroundColor: colors.gray[100]},
            }}
        />
        </GestureHandlerRootView>
    )
}