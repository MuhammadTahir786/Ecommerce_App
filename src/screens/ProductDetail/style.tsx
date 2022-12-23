import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    productDetailContainer:{ flex: 1, backgroundColor: "white" },
    productDetailHeaderContainer: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#E4EEFB", paddingHorizontal: 20, paddingTop: 10} ,
    headerContainer: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 20 },
    headerText: { color: "black", fontSize: 25, fontWeight: "bold" },
    headerIconCount: { backgroundColor: "red", width: 20, borderRadius: 100, textAlign: "center", color: "white", position: "absolute", zIndex: 1, right: 25 },
    imageContainer:{ alignItems: "center", paddingVertical: 30, backgroundColor: "#E4EEFB", borderBottomRightRadius: 30, borderBottomLeftRadius: 30 },
    image:{width: 200, height: 200 },
    productInfoContainer:{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, alignItems: "center", marginVertical: 10 },
    productName:{ color: "black", fontSize: 25, fontWeight: "bold" },
    productLikeIcon:{ backgroundColor: "white", padding: 10, borderRadius: 10, elevation: 10,},
    productRatingContainer:{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20 },
    productRating:{ paddingVertical: 10 },
    productPrice:{ fontSize: 20, color: "black" },
    aboutItemHeading:{color: "black", marginHorizontal: 20, marginVertical: 10, fontWeight: "bold", fontSize: 20},
    aboutText:{marginHorizontal: 20, textAlign: "justify", color: "gray"},
    buttonContainer:{ justifyContent: "flex-end", marginVertical: 10 },
    checkoutBtn:{ backgroundColor: "#041455", marginHorizontal: 20, alignItems: "center", paddingVertical: 10, borderRadius: 10 },
    btnText:{ color: "white", fontWeight: "bold" },









})