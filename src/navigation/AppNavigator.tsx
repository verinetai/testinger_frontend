import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors } from "../theme";

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.backgroundElevated,
    border: colors.surfaceBorder,
    text: colors.textPrimary,
    primary: colors.accent,
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.backgroundElevated,
            borderTopColor: colors.surfaceBorder,
          },
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Keşfet" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
