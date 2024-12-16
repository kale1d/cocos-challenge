import { TInstrument } from '../../services/types/services.types';

export type TOrderModalProps = {
  visible: boolean;
  instrument: TInstrument | null;
  onClose: () => void;
};
