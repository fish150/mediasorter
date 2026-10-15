import MediaCard from "@/components/MediaCard";


export default function HomeScreen() {

  return <MediaCard title="JOKER"
      infoLine="2019 · Todd Phillips · 2h 2m"
      descript="A mentally troubled comedian embarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral that leads to the creation of an iconic villain."
      mediaTags={['horror', 'thriller', 'drama', 'crime']}
      image={require('../../assets/myimages/images.jpg')}
      iconName="film"
      colors={['#E0DDD2', '#ACA896', '#7B5D2B', '#47371D', '#171410']} />;
}


