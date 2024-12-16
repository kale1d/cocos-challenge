import { View, Text, FlatList, Pressable } from 'react-native';
import { Layout } from '../../../components/Layout';
import { useOrders } from './orders.hooks';
import { styles } from './orders.styles';
import { TOrders } from '../../../services/types/services.types';
import { CURRENCIES } from '../../../utils/constants';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';

type TEnrichedOrder = TOrders & { name?: string; ticker?: string };

export const OrdersScreen: React.FC = () => {
  const { orders, isLoadingInstruments, isErrorInstruments } = useOrders();

  const renderOrderItem = ({ item }: { item: TEnrichedOrder }) => (
    <Pressable style={styles.card}>
      <View>
        <Text style={styles.ticker}>{item?.ticker}</Text>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.orderDetails}>
          {item.side} • {item.type}
        </Text>
      </View>
      <View>
        <Text style={styles.quantity}>
          {item.quantity} {item.type === 'LIMIT' && `@ ${item.price}`}{' '}
          {CURRENCIES.ARS}
        </Text>
        <Text
          style={[
            styles.status,
            item.status === 'FILLED'
              ? styles.filledStatus
              : item.status === 'PENDING'
                ? styles.pendingStatus
                : styles.canceledStatus,
          ]}>
          {item.status}
        </Text>
      </View>
    </Pressable>
  );

  if (isLoadingInstruments) {
    return <Loading />;
  }

  if (isErrorInstruments) {
    return <Error text="Failed to load orders" />;
  }

  return (
    <Layout title="Orders">
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No orders yet</Text>
            <Text style={styles.emptyDescription}>
              Your orders will appear here
            </Text>
          </View>
        )}
      />
    </Layout>
  );
};

export default OrdersScreen;
