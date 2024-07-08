import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFAF3'
    },
    animationProperties: {
        height: verticalScale(300), 
        width: scale(300),
    },
})

export default styles;