import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

// 模拟的用户数据（头像地址请替换为有效的图片 URL）
const profiles = [
  { id: '1', name: 'Alice', age: 26, image: 'https://via.placeholder.com/150/FFB6C1' },
  { id: '2', name: 'Bob', age: 29, image: 'https://via.placeholder.com/150/87CEFA' },
  { id: '3', name: 'Cindy', age: 24, image: 'https://via.placeholder.com/150/98FB98' },
  { id: '4', name: 'David', age: 30, image: 'https://via.placeholder.com/150/FFD700' },
];

const { width } = Dimensions.get('window');

const DatingAppHome = () => {
  // 渲染单个推荐卡片
  const renderProfileCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardName}>
        {item.name}, {item.age}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <Text style={styles.title}>交友 App</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 主体内容区域 */}
      <ScrollView style={styles.content}>
        {/* 欢迎横幅 */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>发现新朋友，开启美好缘分</Text>
        </View>

        {/* 推荐列表 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>推荐</Text>
          <FlatList
            data={profiles}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderProfileCard}
          />
        </View>

        {/* 其他功能区域，可以在这里继续添加更多内容 */}
        <View style={styles.extraSection}>
          <Text style={styles.extraText}>更多功能模块待开发...</Text>
        </View>
      </ScrollView>

      {/* 底部导航菜单 */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>我的</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileButton: {
    padding: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  banner: {
    height: 150,
    backgroundColor: '#87CEFA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  bannerText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    width: width * 0.5,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  extraSection: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraText: {
    fontSize: 16,
    color: '#666',
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DatingAppHome;
