import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputModal from "./InputModal";
import ListItems from "./ListItems";
import firestore from '@react-native-firebase/firestore';
import { DB_DOC_ID, DB_COLLECTION_NAME } from "../util/cloudDB";
import SplashScreen from "../util/splash";

const Home = () => {

    // state to verify UI and Data loading status
    const [ready, setReady] = useState(false);

    // state to store and initialise Data Items
    const [todoTask, setTodoTasks] = useState([]);

    // state to store user input data
    const [todoInput, setTodoInput] = useState("");

    // state to set edit status
    const [editItemState, setEditItemState] = useState({key: "", state: false});

    // state to open/close input modal
    const [modalVisibility, setModalVisibility] = useState(false);
    
    // state to set Input Screen Heading
    const [modalHeading, setModalHeading] = useState("Add Screen");

    // fetch existing Data from CloudDB and update the UI state
    useEffect(() => {
        firestore()
        .collection(DB_COLLECTION_NAME)
        .doc(DB_DOC_ID)
        .get()
        .then(collectionSnapshot => {
            setTodoTasks(collectionSnapshot.data().taskList, setTimeout(() => setReady(true), 2000));
        });
    }, [])
    
    // add function that takes new Item and push into Data List
    // add new Data in CloudDB
    const addTodoOnDB = () => {
        var keyList = [], keyCount = 0;
        todoTask.forEach(item => keyList.push(item.key));
        while(keyList.includes(keyCount.toString()) ) {
            ++keyCount;
        }
        firestore()
        .collection(DB_COLLECTION_NAME)
        .doc(DB_DOC_ID)
        .set({taskList : [...todoTask, { key: keyCount.toString(), title: todoInput}]})
        .then(() => {
            setTodoTasks([...todoTask, {key: keyCount.toString(), title: todoInput}]);
            setTodoInput("");
            setModalVisibility(false);
        });
    }
    
    // update on delete function that takes new Data without the deleted item
    // update the CloudDB and state UI
    const updateDBonDelete = (newList) => {
        firestore()
        .collection(DB_COLLECTION_NAME)
        .doc(DB_DOC_ID)
        .set({taskList : [...newList]})
        .then(() => {
            setTodoTasks(newList);
        });
    }

    // editItem function to setup Edit Modal &
    // set flag and edit screen title to denote "Edit" state
    const editItem = (key, title) => {
        setModalHeading("Edit Screen");
        setTodoInput(title);
        setEditItemState({key: key, state: true});
        setModalVisibility(true);
    }

    // editTodo function to Update the changes in specific ToDo item
    // using "key" that denotes the item number
    // Update the CloudDB and set edit flag to "false"
    const editTodo = (key) => {
        todoTask.forEach(item => item.key === key ? item.title = todoInput : null);
        firestore()
        .collection(DB_COLLECTION_NAME)
        .doc(DB_DOC_ID)
        .set({taskList : [...todoTask]})
        .then(() => {
            setEditItemState({key: "", state: false});
            setTodoInput("");
            setModalVisibility(false);
        });
    }

    // Splash/Welcome screen to display till UI render and Data loading completes
    if (!ready) {
        return <SplashScreen />;
    }

    return(
        <>
        {/* Header Module that displays App Title */}
        <Header/>
        {/* Input Interaction Module to Add/Edit Data take input */}
        <InputModal
            modalVisible={modalVisibility}
            setModalVisible={setModalVisibility}
            modalHeading={modalHeading}
            setModalHeading={setModalHeading}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            addTodo={addTodoOnDB}
            editTodo={editTodo}
            editItemState={editItemState}
            setEditItemState={setEditItemState}
        />
        {/* List Module that displays Data */}
        <ListItems
            todos={todoTask}
            setTodo={updateDBonDelete}
            editItem={editItem}
        />
        </>
    );
}

export default Home;