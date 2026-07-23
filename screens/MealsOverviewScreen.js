import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
const category = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview screen - {category}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
