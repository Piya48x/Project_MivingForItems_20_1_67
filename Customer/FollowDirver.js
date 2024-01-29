import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import io from "socket.io-client";

const FollowDriver = () => {
  const [socket, setSocket] = useState(null);
  const [acceptedOrder, setAcceptedOrder] = useState(null);
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    const newSocket = io("http://192.168.1.8:3000");
    setSocket(newSocket);

    newSocket.on("feedBlackOrder3", (orderDetails) => {
      setAcceptedOrder(orderDetails);
      // Send an acknowledgment to the server
      newSocket.emit("feedBlackOrder3", { orderId: orderDetails.orderId });
    });

    // Listen for driverInfo event to receive driver's name and email
    newSocket.on('feedBlackOrder3', ({ driverName, driverEmail }) => {
      setDriverInfo({ driverName, driverEmail });
      console.log(driverEmail, driverName);
    });

    return () => {
      if (newSocket) {
        newSocket.off("feedBlackOrder3");
        newSocket.off('feedBlackOrder3');
      }
    };
  }, []);

  return (
    <View>
      <Text>Follow Driver Page</Text>
      {acceptedOrder && driverInfo && (
        <View>
          <Text>{`Order ${acceptedOrder.orderId} has been accepted by the driver.`}</Text>
          <View>
            <Text>{`Driver Name: ${driverInfo.driverName}`}</Text>
            <Text>{`Driver Email: ${driverInfo.driverEmail}`}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FollowDriver;
