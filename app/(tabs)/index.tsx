import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
 const router=useRouter();

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full  z-0"></Image>
      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"></Image>
        
        <View className="flex-1 mt-5">
          <SearchBar placeholder="Search for a movie" onPress={()=>router.push("/search")}/>
        </View>
      </ScrollView>
    </View>
  );
}
