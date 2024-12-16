import {
  View,
  TextInput,
  FlatList,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { useSearch } from './search.hooks';
import { Layout } from '../../../components/Layout';
import { TInstrument } from '../../../services/types/services.types';
import { styles } from './search.styles';
import { Colors } from '../../../theme';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';

export const SearchScreen: React.FC = () => {
  const { setSearchQuery, isLoading, isError, results, searchQuery } =
    useSearch();

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image
        source={require('../../../assets/empty-search.png')}
        style={styles.emptyImage}
      />
      <Text style={styles.emptyTitle}>
        {searchQuery ? 'No results found' : 'Search for instruments'}
      </Text>
      <Text style={styles.emptyDescription}>
        {searchQuery
          ? 'Try searching with a different ticker'
          : 'Enter a ticker symbol to start searching'}
      </Text>
    </View>
  );
  const renderInstrument = ({ item }: { item: TInstrument }) => (
    <Pressable style={styles.card}>
      <View>
        <Text style={styles.ticker}>{item.ticker}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>$ {item.last_price}</Text>
      </View>
    </Pressable>
  );

  return (
    <Layout title="Search Instruments">
      <TextInput
        style={styles.searchInput}
        placeholder="Search by ticker..."
        placeholderTextColor={Colors.DARKGRAY}
        onChangeText={text => setSearchQuery(text)}
      />

      {isLoading && <Loading />}

      {isError && <Error text="Failed to search instruments" />}

      {results && (
        <FlatList
          data={results}
          renderItem={renderInstrument}
          keyExtractor={item => `${item.id}-${item.ticker}`}
          ListEmptyComponent={renderEmptyState}
        />
      )}
    </Layout>
  );
};

export default SearchScreen;
