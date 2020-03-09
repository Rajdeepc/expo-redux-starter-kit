import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { connect } from 'react-redux'

const MoleculePage = () => {
    return (
        <View style={styles.container}>
            <Text>I am in AboutPage </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


// const mapStateToProps = state => {
//     return {
//         state
//     }
//   }

// const HomePageContainer = connect(mapStateToProps, {

// })(HomePage)

export default MoleculePage;