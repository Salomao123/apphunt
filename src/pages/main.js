import React, {Component} from 'react';
import api from '../services/api';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    static navigationOptions = {
        title : "JSHunt"
    };

    state = {
       docs : []
    };

    async componentDidMount(){
        this.load();
    }

    load = async () => {
        const response = await api.get("/products");

        const { docs } = response.data;
        
        this.setState({ docs });
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>

            <TouchableOpacity>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {

        const {docs} = this.state;

        return(
            <View>
                <FlatList
                    data={docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}