import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { DiscoverScreen } from "../screens/DiscoverScreen";
import { FriendsScreen } from "../screens/FriendsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { TestsScreen } from "../screens/TestsScreen";
import { colors } from "../theme";
import { BottomTabBar } from "./BottomTabBar";

export type RootTabParamList = {
  Discover: undefined;
  Tests: undefined;
  Friends: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.backgroundElevated,
    border: colors.border,
    text: colors.textPrimary,
    primary: colors.brand,
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: colors.background },
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{ title: "Keşfet" }}
        />
        <Tab.Screen
          name="Tests"
          component={TestsScreen}
          options={{ title: "Testler" }}
        />
        <Tab.Screen
          name="Friends"
          component={FriendsScreen}
          options={{ title: "Arkadaş" }}
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
