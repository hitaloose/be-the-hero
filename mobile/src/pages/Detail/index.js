import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

import logoImg from '../../assets/logo.png'

import * as MailComposer from 'expo-mail-composer'

export default function Detail() {
  /**
   * Navigation
   */
  const navigation = useNavigation()
  const route = useRoute()
  const { incident } = route.params

  /**
 * Consts
 */
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`


  /**
   * Handles
   */
  function handleBack() {
    navigation.goBack()
  }

  function handleMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
  }

  /**
   * Returns
   */
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={handleBack}>
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>

        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Saldo o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Seja o herói desse caso.</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={handleWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={handleMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
