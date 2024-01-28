import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth } from '../../config/firebase';

const ProfileComponent = ({ user }) => {
  const [userName, setUserName] = useState('');

  const fetchUserProfileData = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserName(currentUser.displayName || "DefaultUsername");
    }
  };

  useEffect(() => {
    fetchUserProfileData();
  }, []);

  useEffect(() => {
    fetchUserProfileData();
  }, []);
  const currentUser = auth.currentUser;
 

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profile-screen-bg.png')}
        />
        <Text style={styles.profileName}>{userName || 'John Doe'}</Text>
        <Text style={styles.profileEmail}> {currentUser.email || 'john.doe@example.com'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ProfileComponent;
