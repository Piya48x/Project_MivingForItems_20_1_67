import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login_Regis/Login";
import UserSelectionScreen from "./Service/UserSelectionScreen";
import ServiceProviderScreen from "./Service/ServiceProviderScreen";
import AssignScreen from "./Service/AssignScreen";
import RegisterScreen from "./Login_Regis/RegisterScreen";
import CustomerList from "./Customer/CustomerList";
import ReceiveOrder from "./tsetFlow/ReceiveOrder";
import ReceiveOrderScreen from "./Service/ReceiveOrderScreen";
import EnterOder from "./Service/EnterOder";
import CallOder from "./Customer/CallOder";
import SummaryPage from "./Service/SummaryPage";
import Booking from "./Customer/Booking";
import DeliverySV from "./Service/DeliverySV";
import FollowDirver from "./Customer/FollowDirver";
import DeliveryCUS from "./Customer/DeliveryCUS";
import Onboarding from "./Login_Regis/Onboarding";
import AssignCustomer from "./Customer/AssignCustomer";
import CustomerProvider from "./Customer/CustomerProvide";
import BookingScreen from "./Customer/BookingScreen";
import TimeSelectionScreen from "./Customer/TimeSelectionScreen";
import UserSelectionCS from "./Login_Regis/UserSelectionCS";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import MainCustomer from "./Customer/MainCustomer";
import DrawerContent from "./Customer/Profiles/DrawerContent";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileComponent from "./Service/Profiles/Profile";
import AdvanceBooking from "./Service/Profiles/AdvanceBooking";
import Settings from "./Service/Profiles/Settings";
import Logout from "./Service/Profiles/Logout";
import ProfileScreen from "./Customer/Profiles/ProfileScreen";
import BookingHistoryScreen from "./Customer/Profiles/BookingHistoryScreen";
import SettingsScreen from "./Customer/Profiles/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: "#0085E6",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }}
  >
    <Tab.Screen
      name="EnterOder"
      component={EnterOder}
      options={{
        tabBarLabel: "EnterOder",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileComponent}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="AdvanceBooking"
      component={AdvanceBooking}
      options={{
        tabBarLabel: "Advance Booking",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Logout"
      component={Logout}
      options={{
        tabBarLabel: "Logout",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="log-out" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0085E6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }} // Hide the top bar // กำหนดชื่อของหน้า Login เป็น 'Login'
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }} // Hide the top bar // กำหนดชื่อของหน้า Login เป็น 'Login'
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerBackVisible: false, // This hides the back button
          }}
        />
        <Stack.Screen
          name="UserSelectionScreen"
          component={UserSelectionScreen}
          // options={{ headerShown: false }}
          options={{
            title: "Service",
            headerBackVisible: false, // This hides the back button
          }}
        />
        <Stack.Screen
          name="ServiceProviderScreen"
          component={ServiceProviderScreen}
          options={{ title: "Service" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="AssignScreen"
          component={AssignScreen}
          options={{ title: "Service" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="MainCustomer"
          component={MainCustomer}
          options={{ headerShown: false }}
          // options={({ navigation }) => ({
          //   title: "Customer",
          //   headerLeft: () => (
          //     <TouchableOpacity
          //       onPress={() => {
          //         // ทำสิ่งที่คุณต้องการเมื่อคลิกที่ icon ตั้งค่า
          //       }}
          //       style={{ marginRight: 1 }}
          //     >
          //       <Ionicons name="menu" size={26} color="#fff" />
          //     </TouchableOpacity>
          //   ),
          // })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "Customer" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="CustomerList"
          component={CustomerList}
          options={{ title: "Customer" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="ReceiveOrder"
          component={ReceiveOrder}
          options={{ title: "Customer" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="ReceiveOrderScreen"
          component={ReceiveOrderScreen}
          options={{ title: "Customer" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="EnterOrder" // Make sure the name matches exactly
          component={EnterOder}
          options={{ title: "Service" }}
        />
        <Stack.Screen
          name="CallOder"
          component={CallOder}
          options={{ title: "Customer" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="SummaryPage"
          component={SummaryPage}
          options={{ title: "SummaryPage" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ title: "Booking" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="DeliverySV"
          component={DeliverySV}
          options={{ headerShown: false }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="FollowDirver"
          component={FollowDirver}
          options={{ title: "FollowDirver" }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="DeliveryCUS"
          component={DeliveryCUS}
          options={{ headerShown: false }} // กำหนดชื่อของหน้า Home1 เป็น 'Home'
        />
        <Stack.Screen
          name="AssignCustomer"
          component={AssignCustomer}
          options={{ title: "AssignCustomer" }}
        />
        <Stack.Screen
          name="CustomerProvider"
          component={CustomerProvider}
          options={{ title: "CustomerProvider" }}
        />
        <Stack.Screen
          name="BookingScreen"
          component={BookingScreen}
          options={{ title: "BookingScreen" }}
        />
        <Stack.Screen
          name="TimeSelectionScreen"
          component={TimeSelectionScreen}
          options={{ title: "TimeSelectionScreen" }}
        />
        <Stack.Screen
          name="UserSelectionCS"
          component={UserSelectionCS}
          options={{ title: "UserSelectionCS" }}
        />
        <Stack.Screen
          name="DrawerContent"
          component={DrawerContent}
          options={{ title: "DrawerContent" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="AdvanceBooking"
          component={AdvanceBooking}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="BookingHistoryScreen"
          component={BookingHistoryScreen}
          options={{ title: "BookingHistoryScreen" }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: "SettingsScreen" }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
