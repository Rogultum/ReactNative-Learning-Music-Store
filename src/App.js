import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import SongCard from './components/SongCard';
import music_data from './music-data.json'
import SearchBar from './components/SearchBar';


function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song = {item} />;
  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const searchedTitle = song.title.toLowerCase();

      return searchedTitle.indexOf(searchedText) > -1;
      
    });
    setList(filteredList);
  };

  return(
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch = {handleSearch}/>
      <FlatList
        data = {list}
        keyExtractor = {item => item.id}
        renderItem = {renderSong}
        ItemSeparatorComponent = {renderSeperator}
      />
      
    </SafeAreaView>
  )


}
export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 0.55,
    borderColor: '#e0e0e0'
  }
})
