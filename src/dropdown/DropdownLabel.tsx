import type { DropdownLabelProps } from '@/Dropdown.types';
import { Text, View } from 'react-native';

const DropdownLabel = <T,>({
    label,
    disabled,
    required,
    labelStyle,
}: DropdownLabelProps<T>) => {

    if (!label) return null;

    return (
        <View accessible={false}>
            <Text
                style={[
                    labelStyle,
                    disabled && { opacity: 0.5 },
                ]}
            >
                {label}
                {required && ' *'}
            </Text>
        </View>
    );
};

export default DropdownLabel;