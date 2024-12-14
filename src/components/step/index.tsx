import { Text, View } from "react-native";
import { IconProps, IconQrcode } from "@tabler/icons-react-native";
import { colors, fontFamily } from "@/styles/theme";
import { s } from "./styles";

type Props = {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
}

export function Step({ title, description, icon: Icon }: Props) {
    return (
        <View style={s.container}>
            {Icon && <Icon size={32} color={colors.redd.base}/>}
            <View style={s.details}>
                <Text style={s.title}>
                    {title}
                </Text>
                <Text style={s.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}