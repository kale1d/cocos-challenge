import { View, Text, FlatList, Pressable } from 'react-native';
import { OrderModal } from '../../../components/OrderModal';
import { useInstruments } from './instruments.hooks';
import { Layout } from '../../../components/Layout';
import { TInstrument } from '../../../services/types/services.types';
import { styles } from './instruments.styles';
import { CURRENCIES } from '../../../utils/constants';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';

export const InstrumentScreen: React.FC = () => {
  const {
    calculateReturn,
    useInstrumentsQuery,
    selectedInstrument,
    modalVisible,
    setModalVisible,
    setSelectedInstrument,
    isPositiveReturn,
    handleOnCloseModal,
  } = useInstruments();

  const {
    data: instruments,
    isLoading,
    isError,
    refetch,
  } = useInstrumentsQuery();

  const renderInstrument = ({ item }: { item: TInstrument }) => {
    const handleOnPressInstrument = () => {
      setSelectedInstrument(item);
      setModalVisible(true);
    };

    const returnPercentage = calculateReturn(item.last_price, item.close_price);

    const isPositiveReturnPercentage = isPositiveReturn(returnPercentage);
    return (
      <Pressable style={styles.card} onPress={handleOnPressInstrument}>
        <View>
          <Text style={styles.ticker}>{item.ticker}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>
            {item.last_price} {CURRENCIES.ARS}
          </Text>
          <Text
            style={[
              styles.return,
              isPositiveReturnPercentage ? styles.increase : styles.decrease,
            ]}>
            <Text style={styles.bold}>Return:</Text>{' '}
            {returnPercentage.toFixed(2)}%
          </Text>
        </View>
      </Pressable>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error
        text="Failed to load instruments, please try again."
        onPress={() => refetch()}
      />
    );
  }

  return (
    <Layout title="Instruments">
      <FlatList
        onRefresh={refetch}
        refreshing={isLoading}
        data={instruments}
        renderItem={renderInstrument}
        keyExtractor={item => `${item.id.toString()}-${item.ticker}`}
      />
      <OrderModal
        visible={modalVisible}
        instrument={selectedInstrument}
        onClose={handleOnCloseModal}
      />
    </Layout>
  );
};

export default InstrumentScreen;
