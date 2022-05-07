import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 2,
    width: 300,
    backgroundColor: "#fff"
  },
  manageTeamWrapper: {
    width: 350,
  },
  manageTeamTitle: {
    marginBottom: 10,
  },
  addTeamMemberInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 5,
    fontSize: 18,
  },
  manageTeamButtonContainer: {
    textAlign: "left",
    borderTopColor: "grey",
    borderTopWidth: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  plusButton: {
    fontSize: 28,
    fontWeight: "400",
  },
});

export default styles;