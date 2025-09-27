import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ArticleType } from '../typs';
// import { NewsApiResponse, Article } from '../../types';


export default function TopNews(): React.JSX.Element {


    const [articles, setArticles] = useState<ArticleType[]>([]);
    useEffect(() => {
        getTopNews();
    }, [])

    function getTopNews() {
        //from npm top headlines site git this key
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0edf81f9b7fb4916a1e5a0f8960148c7';

        axios
            .get(url)
            .then((responce) => {
                //it is responce in register named data 
                console.log(responce.data)
                const articles = responce.data?.articles?.filter(
                    (article: ArticleType) => article?.urlToImage !== null,
                );
                // ? safty is result == Null don't crush the app -opject structure-
                // if no image filter it ,In real app we will use place holder image
                setArticles(articles)
            })
            .catch((err) => {
                console.log("request err: ", err);
            })
    }

    function renderItem(item: ArticleType) {
        return (
            <View style={styles.cardCont}>
                <Image
                    style={styles.cardArticelImage}
                    source={{ uri: item.urlToImage }}
                />
                <Text style={styles.cardArticleName}>{item.title} </Text>
            </View >
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Top News</Text>
            <FlatList
                data={articles}
                renderItem={({ item }) => renderItem(item)}
                contentContainerStyle={styles.listCont}
                scrollEnabled={false}
            />
        </View>
    );





    // show one article
    // return (
    //     <View style={styles.listCont}>

    //         <View style={styles.container}>
    //             <Text style={styles.sectionTitle}>Top News</Text>
    //             {articles.length && (

    //                 <View style={styles.cardCont}>
    //                     <Image style={styles.cardArticelImage} source={{ uri: articles[0].urlToImage }} />
    //                     <Text style={styles.cardArticleName}>{articles[0].title}
    //                     </Text>
    //                 </View>
    //             )}


    //         </View >
    //     </View>
    // );
}
