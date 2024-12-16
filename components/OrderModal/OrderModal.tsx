import { Modal, Text, TextInput, Pressable, View } from 'react-native';
import { TOrderModalProps } from './orderModal.types';
import { useOrderModal } from './orderModal.hooks';
import { styles } from './orderModal.styles';
import React from 'react';

export const OrderModal: React.FC<TOrderModalProps> = ({
  visible,
  instrument,
  onClose,
}) => {
  const {
    orderType,
    side,
    quantity,
    price,
    setQuantity,
    setPrice,
    submitOrder,
    createOrderMutation,
    handleOnPressOrderTypeLimit,
    handleOnPressOrderTypeMarket,
    handleOnPressSideBuy,
    handleOnPressSideSell,
  } = useOrderModal({ instrument, onClose });

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>New Order: {instrument?.ticker}</Text>

          <View style={styles.buttonGroup}>
            <Pressable
              style={[
                styles.button,
                orderType === 'MARKET' && styles.activeButton,
              ]}
              onPress={handleOnPressOrderTypeMarket}>
              <Text
                style={[
                  styles.buttonText,
                  orderType === 'MARKET' && styles.activeButtonText,
                ]}>
                Market
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.button,
                orderType === 'LIMIT' && styles.activeButton,
              ]}
              onPress={handleOnPressOrderTypeLimit}>
              <Text
                style={[
                  styles.buttonText,
                  orderType === 'LIMIT' && styles.activeButtonText,
                ]}>
                Limit
              </Text>
            </Pressable>
          </View>

          <View style={styles.buttonGroup}>
            <Pressable
              style={[styles.button, side === 'BUY' && styles.activeButton]}
              onPress={handleOnPressSideBuy}>
              <Text
                style={[
                  styles.buttonText,
                  side === 'BUY' && styles.activeButtonText,
                ]}>
                Buy
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button, side === 'SELL' && styles.activeButton]}
              onPress={handleOnPressSideSell}>
              <Text
                style={[
                  styles.buttonText,
                  side === 'SELL' && styles.activeButtonText,
                ]}>
                Sell
              </Text>
            </Pressable>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Quantity"
            placeholderTextColor="#9CA3AF"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />

          {orderType === 'LIMIT' && (
            <TextInput
              style={styles.input}
              placeholder="Price"
              placeholderTextColor="#9CA3AF"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          )}

          <Pressable
            style={[
              styles.submitButton,
              (createOrderMutation.isPending ||
                !quantity ||
                (orderType === 'LIMIT' && !price)) &&
                styles.disabledButton,
            ]}
            onPress={submitOrder}
            disabled={
              createOrderMutation.isPending ||
              !quantity ||
              (orderType === 'LIMIT' && !price)
            }>
            <Text style={styles.submitButtonText}>
              {createOrderMutation.isPending ? 'Submitting...' : 'Submit Order'}
            </Text>
          </Pressable>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
