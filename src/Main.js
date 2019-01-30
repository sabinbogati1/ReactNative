import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect} from "react-redux";
import PlaceInput from "./components/PlaceInput/PlaceInput";
import PlaceList from "./components/PlaceList/PlaceList";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace} from "./store/actions/index";

 class Main extends Component {
    // state = {
    //     places: [],
    //     selectedPlace: null
    //   };

   placeAddedHandler = placeName => {

     this.props.onAddPlace(placeName);

        // this.setState(prevState => {
        //   return {
        //     places: prevState.places.concat({
        //       key: Math.random(),
        //       name: placeName,
        //       //image: placeImage
        //       image: {
        //           uri: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        //       }
        //     })
        //   };
        // });
      };

   placeSelectedHandler = key => {
     this.props.onSelectPlace(key);

    //  this.props.placeSelectedHandler

    //     this.setState(prevState => {
    //       return {
    //         selectedPlace: prevState.places.find(place => {
    //           return place.key === key;
    //         })
    //       }
    //     })
      };


   placeDeletedHandler = () => {
     this.props.onDeletePlace();
        //    this.setState(prevState => {
        //   return {
        //     places: prevState.places.filter(place => {
        //       return place.key !== prevState.selectedPlace.key;
        //     }),
        //     selectedPlace: null
        //   };
        // });
      }

   modalClosedHandler = () => {

     this.props.onDeselectPlace();

        // this.setState({
        //   selectedPlace: null
        // });
      }

      render() {
        return (
          <View style={styles.container}>
            <PlaceDetail
              onItemDeleted={this.placeDeletedHandler}
              onModalClosed={this.modalClosedHandler}
              selectedPlace={this.props.selectedPlace}
            />

            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList
              places={this.props.places}
              onItemSelected={this.placeSelectedHandler}
            />
          </View>
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 26,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);