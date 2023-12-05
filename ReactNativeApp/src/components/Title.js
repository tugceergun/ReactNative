import { View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";

const Title = (props) => { 
    console.log(props)
    return(
        
        <View>
            {props.isVisible && (
            <Text style={[styles.title, {color: props.color }]}>
                {props.numberOfLines} - {props.text}</Text>
            )}
        </View>
        
    );
};

const styles = StyleSheet.create({
    title: {
        fontsize: 28,
        fontWeight: "700",
    },
});

Title.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.number,
    isVisible: PropTypes.bool,
}

Title.defaultProps = {
    text: "Varsayilan Baslik",
    color: "blue",
    isVisible: true,
  }

export default Title; 