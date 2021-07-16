import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const phrases = [
  'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
  'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
  'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
  'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
  'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.'
]

export default function PhrasedBook() {
  const [phrase, setPhrase] = useState("");

  function getRandomPhrase(){
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  return (
    <View style={styles.container}>
      {!!phrase ? <Image
        style={{
          width: 200,
          height: 200,
          marginBottom: 5
        }}
        source={{
          uri: 'https://toppng.com/uploads/preview/open-book-115494189764c5rqgceul.png',
        }}
      /> :
      <Image
        style={{
          width: 200,
          height: 200,
          marginBottom: 5
        }}
        source={{
          uri: 'https://atlas-content-cdn.pixelsquid.com/stock-images/closed-book-3y1Eya8-600.jpg',
        }}
      />}
      {!!phrase && <Text style={styles.title}>{phrase}</Text>}
      <Button title="Abrir frase do dia" onPress={()=> {getRandomPhrase()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgb(29, 161, 242)',
    marginVertical: 30,
    marginHorizontal: 'auto'
  }
});