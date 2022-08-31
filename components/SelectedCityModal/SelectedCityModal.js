import { StyleSheet, View, Text, Modal, Button } from 'react-native';
import React, { useState } from 'react';


function SelectedCityModal({ onSelectCity, citiesList }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSelect = (city) => {
        onSelectCity(city)
        handleCancel()
    }
    
    return(
        <View>
            <Button title='Seleccionar otra ciudad' onPress={showModal} color='blue'/>
            <Modal visible={isModalVisible} animationType='slide'>
                <View style={styles.modalContainer}>
                    <Text>Otras ciudades disponibles</Text>
                    {
                        citiesList.map((city) => {
                            return(
                                <Button key={city.city} onPress={()=> handleSelect(city)} title={city.city}/>
                            )
                        })
                    }
                    <Button title='Cancelar' onPress={handleCancel} color='blue'/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 20,
    },
})

export default SelectedCityModal; 
