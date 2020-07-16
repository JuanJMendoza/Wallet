import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
 

export const pieColors = [
  "#EF4C22",
  "#f1dd6a",
  "#D4F2D2",
  "#B776B2",
  "#84A59D",
  "#262560",
  "#4F5DA9"
];
 
export const styles = StyleSheet.create({
 headerText: {
    alignSelf: 'center',
    paddingTop: 15,
    padding: 8,
    color: "#D16C58",
    fontWeight: 'bold',
    fontSize: 30,
 },
 container: {
   flexGrow: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: "white"
 },
 logo: {
   width: 150,
   height: 108,
   resizeMode: 'contain',
 },
 buttontext: {
   textAlign: 'center',
   fontSize: 18,
 },
 text: {
   color: "white",
   fontWeight: 'bold',
   position: 'absolute',
 },
 slider: {
   marginLeft: 25,
   marginRight: 25,
   marginTop: 10,
   alignItems: 'stretch',
   justifyContent: 'center',
 },
 sliderTextAlign: {
   flexDirection: 'row',
   marginLeft: 25,
   marginRight: 25,
   justifyContent: 'space-between',
 },
 sliderSmallText: {
   alignSelf: 'center',
   color: "white",
   fontWeight: 'bold',
   fontSize: 12,
 },
 track: {
   height: 3,
   borderRadius: 1,
 },
 thumb: {
   width: 20,
   height: 20,
   borderRadius: 20 / 2,
   backgroundColor: 'white',
   shadowColor: 'black',
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 2,
   shadowOpacity: 0.35,
 },
 smallerText: {
   alignSelf: 'center',
   color: "#D16C58",
   fontWeight: 'bold',
   fontSize: 16,
 },
 categoryText: {
  alignSelf: 'center',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: 16,
},
 editCategoryView: {
   paddingLeft: 20,
   paddingEnd: 20,
   flexDirection: 'row',
   justifyContent: 'space-between',
 },
 homePageBudgetTextAlign: {
   flexDirection: 'row',
   width: '100%',
   left: 40,
   justifyContent: 'space-around',
   paddingTop: 10,
 },
 budgetSetupText: {
   color: '#000000',
   fontWeight: 'bold',
   fontSize: 20,
   paddingTop: 10,
   width: '80%',
   textAlign: 'center',
 },
 formContainer: {
   width: '80%',
   marginVertical: 10,
   height: 60,
   borderColor: "blue",
   backgroundColor: '#3947ad',
   borderWidth: 2,
   color: "white",
   fontSize: 18,
   paddingLeft: 20,
 },
 budgetContainer: {
   flexDirection: 'row',
   marginTop: 10,
   paddingLeft: 40,
 },
 busgetSetupContainer: {
   width: deviceWidth - 40,
   position: 'absolute',
   top: 50,
   alignItems: 'center',
 },
 budgetInput: {
   padding: 10,
   width: '60%',
   height: 50,
   borderColor: "blue",
   backgroundColor: '#3947ad',
   borderWidth: 2,
   color: "white",
   fontSize: 18,
 },

});
