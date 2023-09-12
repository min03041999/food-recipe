import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';

const RecipeListScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            {/* render header */}
            <Header headerText={"Hi, John "} headerIcon={"bell-o"} />

            {/* Search Filter */}
            <SearchFilter icon="search" placeholder={"Enter your fav recipe"} />

            {/* Categories filter */}
            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter />
            </View>

            {/* Categories List Filter */}
            <View style={{ marginTop: 22, height: 500 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
                {/* Categories list */}
                <RecipeCard />
            </View>
        </SafeAreaView>
    )
}

export default RecipeListScreen;

const styles = StyleSheet.create({

})