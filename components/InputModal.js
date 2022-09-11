import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, styles } from '../styles/appStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InputModal = (
    { 
        modalVisible, 
        setModalVisible, 
        modalHeading, 
        setModalHeading,
        todoInput,
        setTodoInput,
        addTodo,
        editTodo,
        editItemState,
        setEditItemState
     }) => {

    // Open function to Activate Input Screen
    const handleOpen = () => {
        setModalHeading("Add Screen");
        setModalVisible(true);
    }

    // Close function to reset input data when user cancel's operation
    const handleClose = () => {
        setTodoInput("");
        setEditItemState({item : "", state: false});
        setModalVisible(false);
    }

    // Submit function that calls Add/Edit method based on flag
    const handleSubmit = () => {
        editItemState.state ? editTodo(editItemState.key) : addTodo();
    }

    return(
        <>
            {/* Add Button to open Input screen */}
            <TouchableOpacity onPress={() => {handleOpen()}} style={styles.ModalButton}>
                <FontAwesome name="plus" size={25} color={colors.tertiary} />
                <Text style={{
                    fontSize: 16,
                    letterSpacing: 1,
                    color: `${colors.tertiary}`
                }}>Add</Text>
            </TouchableOpacity>

            {/* Input Screen Modal for Input Operations */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                <View style={styles.ModalContainer}>
                    <View style={styles.ModalView}>
                        {/*  Dynamic Header based on Screen*/}
                        <View style={styles.ModalHeader}>
                            <Text style={styles.HeaderTitle}>
                                {modalHeading}
                            </Text>
                        </View>

                        {/* Input Area Element */}
                        <TextInput 
                            multiline={true}
                            style={styles.StyledInput}
                            placeholder="Add a Todo"
                            placeholderTextColor={colors.tertiary}
                            selectionColor={colors.tertiary}
                            autoFocus={true}
                            onChangeText={(text) => setTodoInput(text)}
                            value={todoInput}
                            onSubmitEditing={handleSubmit}
                        />

                        {/* Button to Interact User operation of Cancel/Complete */}
                        <View style={styles.ModalActionGroup}>
                            <TouchableOpacity onPress={handleClose} style={styles.ModalAction} color={colors.primary}>
                                <FontAwesome name="close" size={25} color={colors.tertiary} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSubmit} style={styles.ModalAction} color={colors.tertiary}>
                                <FontAwesome name="check" size={25} color={colors.tertiary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

export default InputModal;