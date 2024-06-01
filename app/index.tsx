import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import welcomeImage from '@/assets/images/welcome.png';
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const WelcomeScreen = () => {
  const openLink = () => {
    Linking.openURL('https://galaxies.dev');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headline1}>Bem Vindo Ao</Text>
      <Text style={styles.headline2}>App Do Vitinho</Text>
      <Text style={styles.description}>
        Leia nossa{' '}
        <Text style={styles.link} onPress={openLink}>
          Politica de privacidade
        </Text>
        . {'Clique em "Aceitar para continuar" para aceitar o nosso '}
        <Text style={styles.link} onPress={openLink}>
          Termos de serviço
        </Text>
        .
      </Text>
      <Link href={'/otp'} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aceite para continuar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  welcome: {
    width: '100%',
    height: 300,
    borderRadius: 60,
    marginBottom: 80,
  },
  headline1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.gray
  },
  headline2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: Colors.gray
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 80,
    color: 'black',
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
    borderRadius: 33
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 22,
    fontWeight: '500',
  },
});

export default WelcomeScreen;
