import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  DetailScreenNavigationProp,
  DetailScreenRouteProp,
} from '../../../types/NavigationParams'
import { API_ACCESS_TOKEN, API_URL } from '@env'
import axios from 'axios'
import { Movie } from '../../../types/app'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'
import MovieList from '../../components/movies/MovieList'
const DetailScreen = (): JSX.Element => {
  const route = useRoute<DetailScreenRouteProp>()
  const navigation = useNavigation<DetailScreenNavigationProp>()
  const [movie, setMovie] = useState<Movie>()
  const movie_id = route.params.id
  const fetchData = (): void => {
    const ACCESS_TOKEN = API_ACCESS_TOKEN

    const URL = `${API_URL as string}/movie/${movie_id}`

    if (ACCESS_TOKEN == null || URL == null) {
      throw new Error('ENV not found')
    }

    axios
      .get(URL, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        setMovie(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
        }}
      >
        <LinearGradient
          colors={['#00000000', 'rgba(0, 0, 0, 0.7)']}
          locations={[0.6, 0.8]}
          style={styles.gradientStyle}
        >
          <Text style={styles.movieTitle}>{movie?.title}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="yellow" />
            <Text style={styles.rating}>{movie?.vote_average.toFixed(1)}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.padding}>
        <Text style={styles.overview}>{movie?.overview}</Text>
        <View style={styles.infoWrapper}>
          <View style={styles.flexChild}>
            <Text style={styles.infoTitle}>Original Language</Text>
            <Text>{movie?.original_language}</Text>
          </View>
          <View style={styles.flexChild}>
            <Text style={styles.infoTitle}>Original Language</Text>
            <Text>{movie?.original_language}</Text>
          </View>
          <View style={styles.flexChild}>
            <Text style={styles.infoTitle}>Original Language</Text>
            <Text>{movie?.original_language}</Text>
          </View>
          <View style={styles.flexChild}>
            <Text style={styles.infoTitle}>Original Language</Text>
            <Text>{movie?.original_language}</Text>
          </View>
        </View>
      </View>
      <MovieList
        title={'Recommendation'}
        path={`/movie/${movie_id}/recommendations`}
        coverType={'poster'}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  backgroundImage: {
    height: 240,
  },
  backgroundImageStyle: {
    borderRadius: 0,
  },
  movieTitle: {
    color: 'white',
  },
  gradientStyle: {
    padding: 8,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    color: 'yellow',
    fontWeight: '700',
  },
  padding: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  overview: {
    fontSize: 14,
  },
  infoTitle: {
    fontWeight: 'bold',
  },
  infoWrapper: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexChild: {
    flexBasis: '50%',
  },
})
