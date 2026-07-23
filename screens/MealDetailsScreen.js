import { View, Text } from "react-native";

function MealDeatilsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meals Details screen {mealId}</Text>
    </View>
  );
}

export default MealDeatilsScreen;
