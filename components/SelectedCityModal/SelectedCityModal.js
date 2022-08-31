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
            <View style={styles.showModalButton}>
                <Button title='Seleccionar otra ciudad' onPress={showModal} color='#6262b7'/>
            </View>
            <Modal visible={isModalVisible} animationType='slide'>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitleText}>Otras ciudades disponibles</Text>
                    {
                        citiesList.map((city) => {
                            return(
                                <View key={city.city} style={styles.modalOptionButton}>
                                    <Button  onPress={()=> handleSelect(city)} title={city.city} color='#6262b7'/>
                                </View>
                            )
                        })
                    }
                    <View style={styles.modalCancelButton}>
                        <Button title='Cancelar' onPress={handleCancel} color='blue'/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    showModalButton:{
        marginTop: 15,
    },
    modalContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 20,
    },
    modalTitleText:{
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalOptionButton: {
        margin: 5,
    },
    modalCancelButton: {
        marginTop: 50,
    }
})

export default SelectedCityModal; 
