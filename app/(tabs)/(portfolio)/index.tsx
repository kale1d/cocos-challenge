import { View, Text, FlatList, Pressable } from 'react-native';
import { Layout } from '../../../components/Layout';
import { usePortfolio } from './portfolio.hooks';
import { styles } from './portfolio.styles';
import { TPortfolio } from '../../../services/types/services.types';
import { CURRENCIES } from '../../../utils/constants';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';

export const PortfolioScreen: React.FC = () => {
  const {
    getPortfolioQuery,
    calculateMarketValue,
    calculateGains,
    calculateReturn,
  } = usePortfolio();

  const { data: portfolio, isLoading, isError, refetch } = getPortfolioQuery;

  const renderPortfolioItem = ({ item }: { item: TPortfolio }) => {
    const marketValue = calculateMarketValue(item.quantity, item.last_price);
    const gains = calculateGains(
      item.quantity,
      item.last_price,
      item.avg_cost_price,
    );
    const returns = calculateReturn(gains, item.quantity * item.avg_cost_price);

    return (
      <Pressable style={styles.card}>
        <View>
          <Text style={styles.ticker}>{item.ticker}</Text>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        </View>
        <View>
          <Text style={styles.marketValue}>
            {marketValue.toFixed(2)} {CURRENCIES.ARS}
          </Text>
          <Text
            style={[
              styles.gains,
              gains >= 0 ? styles.increase : styles.decrease,
            ]}>
            {gains.toFixed(2)} {CURRENCIES.ARS} ({returns}%)
          </Text>
        </View>
      </Pressable>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error text="Failed to load portfolio" onPress={() => refetch()} />;
  }

  return (
    <Layout title={'Portfolio'}>
      <FlatList
        data={portfolio}
        renderItem={renderPortfolioItem}
        keyExtractor={(_, index) => `${index.toString()}`}
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </Layout>
  );
};

export default PortfolioScreen;
