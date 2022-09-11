import { StyleSheet } from "react-native";

export const colors = {
  primary: "#232423",
  secondary: "#c5c7c6",
  tertiary: "#E6E6E6",
  alternative: "#999999",
}

export const styles = StyleSheet.create({
  Container : {
    backgroundColor: `${colors.primary}`,
    height: "100%",
    padding: 20,
    paddingTop: 20,
    paddingBottom: 0
  },
  HeaderView : {
    paddingVertical : 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  HeaderTitle : {
    fontSize: 35,
    fontWeight: "bold",
    color: `${colors.tertiary}`,
    letterSpacing: 2,
  },
  HeaderButton : {
    fontWeight: "bold",
    color: `${colors.tertiary}` 
  },
  ListView : {
    backgroundColor: `${colors.secondary}`,
    minHeight: 80,
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginBottom: 15,
    borderRadius: 10
  },
  TodoText : {
    fontSize: 16,
    letterSpacing: 1,
    marginEnd: 10,
    width: "70%",
    color: `${colors.tertiary}`
  },
  ModalButton : {
    backgroundColor: `${colors.secondary}`,
    minHeight: 80,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    alignSelf: "center",
    borderRadius: 10
  },
  ModalContainer : {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor : `${colors.primary}`
  },
  ModalView : {
    backgroundColor: `${colors.secondary}`,
    borderRadius: 20,
    padding: 35
  },
  StyledInput : {
    width: 300,
    height: 100,
    backgroundColor: `${colors.tertiary}`,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    color: `${colors.tertiary}`,
    letterSpacing: 1
  },
  ModalAction : {
    width: 60,
    height: 60,
    backgroundColor: `${colors.tertiary}`,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  ModalActionGroup : {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30
  },
  ModalHeader : {
    alignItems: "center",
    marginBottom: 30
  }
});