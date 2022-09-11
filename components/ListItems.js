import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { colors, styles } from '../styles/appStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListItems = ({todos, setTodo, editItem}) => {

    // Edit function calls Edit_Item method with unique key and update data
    // Which updates the existing Data List
    const onEdit = (key, title) => {
         editItem(key, title);
    }

    // Delete function takes unique key of the item and removes it from the list
    // Then set the update Data in UI list
    const onDelete = (e) => {
        const newTodos = todos.filter((item) => {return item.key !== e});
        setTodo(newTodos);  
    }
    return(
        <>
            {/* Display Data if available or Message to denote Empty Data */}
            {todos.length ? <FlatList
            data={todos}
            keyExtractor={(dataItem) => dataItem.key.toString()}
            renderItem={(data) => {
                return(
                    <View style={styles.ListView}>
                        <Text style={styles.TodoText}>{data.item.title}</Text>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={() => onEdit(data.item.key, data.item.title)}><FontAwesome name="edit" size={25} color={colors.tertiary} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => onDelete(data.item.key)} style={{marginLeft: 20}}><FontAwesome name="trash" size={25} color={colors.tertiary} /></TouchableOpacity>
                        </View>
                    </View>
                )
            }}
            /> : <Text style={{ fontSize: 15,
                fontWeight: "bold",
                letterSpacing: 2, }}>No Task Item Items Available {"\n"}Click on Add Button for new Task</Text>}
        </>
    );
}

export default ListItems;