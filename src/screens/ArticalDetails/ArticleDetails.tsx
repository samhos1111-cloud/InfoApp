import { View, Text, TouchableOpacity, Image } from 'react-native'; import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MainStackParamList } from '../../Navigation/mainStack';
import screenNames from '../../Navigation/screenNames';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
//import { Image } from 'react-native/types_generated/index';

export default function ArticleDetails(): React.JSX.Element {

    const { goBack } = useNavigation();
    const { params } = useRoute<RouteProp<MainStackParamList, screenNames.articleDetails>>();
    const { article } = params ?? {};
    const { description, source, title, urlToImage } = article ?? {};

    return (<View>
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
                        <Text style={styles.goBackText}> Go Back</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={{ uri: urlToImage }}
                    style={styles.coverImge}
                />
                <View style={styles.datacontainer}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.describetion}>{description}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    </View>);
};     