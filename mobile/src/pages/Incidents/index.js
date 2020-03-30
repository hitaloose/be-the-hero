import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles'

import logoImg from '../../assets/logo.png'

import api from '../../services/api'

export default function Incidents() {
  /**
   * Navigate
   */
  const navigation = useNavigation()

  /**
   * States
   */
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  /**
   * Functions
   */
  async function loadIncidents() {
    if (loading) return
    if (total > 0 && incidents.length === total) return

    setLoading(true)

    const { data, headers } = await api.get('/incidents', {
      params: { page }
    })
    setIncidents([...incidents, ...data])
    setTotal(headers['x-total-count'])

    setPage(page + 1)
    setLoading(false)
  }

  /**
   * Handles
   */
  function handleNavigateDetail(incident) {
    navigation.navigate('Detail', { incident })
  }

  /**
   * Effects
   */
  useEffect(() => {
    loadIncidents()
  }, [])

  /**
   * Returns
   */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => handleNavigateDetail(incident)}
            >
              <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
