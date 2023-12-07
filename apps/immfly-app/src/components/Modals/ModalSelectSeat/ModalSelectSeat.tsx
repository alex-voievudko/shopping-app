import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ModalBase } from '../ModalBase/ModalBase';
import { useModalsStore, useSettingsStore } from '../../../store';
import config from '../../../config/config.json';
import { styles } from './ModalSelectSeat.styles';

export const ModalSelectSeat = () => {
  const {
    isChangeSeatModalOpen,
    actions: { setIsChangeSeatModalOpen },
  } = useModalsStore();
  const {
    seatLetter,
    seatNumber,
    actions: { setSeatLetter, setSeatNumber },
  } = useSettingsStore();

  const seatsLettersData = config.seatLetters;
  const seatsNumbersData = config.seatNumbers;

  return (
    <ModalBase
      title="Select your seat"
      isVisible={isChangeSeatModalOpen}
      onClose={() => setIsChangeSeatModalOpen(false)}
    >
      <View style={styles.container}>
        <Picker style={styles.picker} selectedValue={seatLetter} onValueChange={itemValue => setSeatLetter(itemValue)}>
          {seatsLettersData.map(seatLetter => (
            <Picker.Item key={seatLetter} style={styles.item} label={seatLetter} value={seatLetter} />
          ))}
        </Picker>
        <Picker style={styles.picker} selectedValue={seatNumber} onValueChange={itemValue => setSeatNumber(itemValue)}>
          {seatsNumbersData.map(seatNumber => (
            <Picker.Item key={seatNumber} style={styles.item} label={seatNumber} value={seatNumber} />
          ))}
        </Picker>
      </View>
    </ModalBase>
  );
};
