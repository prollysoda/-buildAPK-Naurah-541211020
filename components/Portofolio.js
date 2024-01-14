import react from 'react';
import {View, Text, Image, Button, TextInput, Linking, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

  const Figma = 'https://www.figma.com/file/8VZpvCXBkvvAl5PShjwuQ9/Portofolio?type=design&node-id=0%3A1&mode=design&t=Xs9lVlM87UTIDHxr-1';

  const OpenFigma = () => {
    Linking.openURL(Figma);
  };

  const WA = 'https://wa.link/9zv2yh';

  const OpenWA = () => {
  Linking.openURL(WA);
  };

const Portofolio = () => {

  return(
    <ScrollView>
    <View style={{backgroundColor: 'white', flex: 100}}>
      <View style={{ padding: 10, alignItems: 'center', marginTop: 10}}>
        <Image style={{width: 160, height: 160, borderRadius:50, marginTop: 30}} source={require('../assets/mememememe.jpg')} />
      </View>
      <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#006c99', fontSize:40}}> sorin </Text>
      <Text style={{ textAlign: 'center', color: '#2E2F2F', fontSize:18, paddingLeft:25, paddingRight:25, paddingBottom:10, paddingTop: 10}}> Hello ! My name is sorin. I'm a student of SMK Telkom Purwokerto. My passion is art and design. Currently in senior year.</Text>
      <View style={{letterSpacing:1, backgroundColor:"#212121",borderRadius:10,borderColor:"#212121", borderWidth: 1, marginLeft:100,marginRight: 100, paddingTop: 10,paddingBottom:10, paddingLeft: 10, paddingRight: 10,marginTop:20,marginBottom:20}}>
        <Button title="contact me" color="#212121" onPress={OpenWA}/>
      </View>

      <Text style={{paddingTop: 15, marginTop:30,paddingBottom:15, fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize:20,borderWidth:1,backgroundColor:"#212121",letterSpacing:1}}>✧ PROJECT ✧ PROJECT ✧ PROJECT ✧</Text>

      <View style={{backgroundColor: 'white', padding: 10, alignItems: 'center', marginTop: 10, flex:1}}>

        <Image style={{width:400 , height: 400, marginTop:10}} source={require('../assets/poster1.png')} />
        
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Poster Advertising s'mores ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>
            
        
        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/poster2.png')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Instagram Feed Costa Complejo ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>

        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/poster3.png')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Instagram Feed Taman Langit ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>

        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/sorinpng.png')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Sorin pngtuber ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>

        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/yh.jpg')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Original Character: Alethea and Ame ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>

        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/potrait.png')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Potrait of Ame ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>

        <Image style={{width: 400, height: 400, marginTop:10}} source={require('../assets/amebday.png')} />
        <View style={{alignItems:'center',flexDirection:'row',justiftyContent:'center',padding:5}}>
          <Text style={{marginBottom:15,marginTop:15,letterSpacing:0.5, color: '#2E2F2F', fontSize:15, alignSelf:'flex-start', paddingLeft:10, marginRight:10, fontFamily:'verdana'}}>☆ Ame's Bday ☆</Text>
           <Icon.Button
            name="arrow-right"
            backgroundColor="black"
            onPress={OpenFigma}
            color="white" >here !</Icon.Button>
          </View>
        
        <Text style={{width:500,paddingTop: 15, marginTop:30,paddingBottom:15, fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize:20,borderWidth:1,backgroundColor:"#212121",letterSpacing:1}}>✧ PROJECT ✧ PROJECT ✧ PROJECT ✧</Text>

      </View>
    </View>
    </ScrollView>

  );
};

export default Portofolio;