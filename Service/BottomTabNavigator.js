import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0782F9", // Active tab text color
        inactiveTintColor: "gray", // Inactive tab text color
      }}
    >
      <Tab.Screen
        name="Profile"
        component={YourProfileComponent}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AdvanceBooking"
        component={AdvanceBookingComponent}
        options={{
          tabBarLabel: "Advance Booking",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsComponent}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutComponent}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-out" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
