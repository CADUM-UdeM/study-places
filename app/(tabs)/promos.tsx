import DiscountButton from "@/components/DiscountButton";
import Header from "@/components/Header";
import React from 'react';
import { ScrollView, View } from "react-native";


export default function PromoPage(){


    return(
        <View style={{ flex: 1 }}>
            <Header userName="Kevin" welcomeMessage="Ravis de vous revoir !"/>

            {/* Lists de discounts*/ }
            <ScrollView style={{flex: 1, paddingTop: 136}}
            contentContainerStyle={{paddingBottom: 140}}> 

                <DiscountButton shopName="shop1" discount="20" date="20 Oct"/>
                <DiscountButton shopName="shop2" discount="40" date="10 Sept"/>
                <DiscountButton shopName="shop3" discount="10" date="12 Dec"/>
                <DiscountButton shopName="shop4" discount="25" date="27 Aug"/>
                <DiscountButton shopName="shop5" discount="20" date="20 Oct"/>
                <DiscountButton shopName="shop6" discount="20" date="20 Oct"/>
                <DiscountButton shopName="shop7" discount="20" date="20 Oct"/>
                <DiscountButton shopName="shop8" discount="20" date="20 Oct"/>

            </ScrollView>

        </View>
    );
}