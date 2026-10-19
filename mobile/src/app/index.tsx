import MediaCard from "@/components/MediaCard";
import {useState} from 'react'; 

const items = [{
      title:"JOKER",
      infoLine:"2h 2m · Todd Phillips · 2019",
      descript:"A mentally troubled comedian embarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral thatembarks on a downward spiral that leads to the creation of an iconic villain.",
      mediaTags:['horror', 'thriller', 'drama', 'crime'],
      image:require('../../assets/myimages/joker.jpg'),
      iconName:"film",
      colors:['#E0DDD2', '#ACA896', '#7B5D2B', '#47371D', '#171410']},

      {
      title:"Any Way (feat. maggie roberts)",
      infoLine:"Pulsar · L'Imperatrice, Maggie Rogers · 2024",
      descript:"amazing album summary here like wow omg what an amazing album i shoudl listen right now wowie",
      mediaTags:['edm', 'indie-pop', 'synthpop', 'Frence electro'],
      image:require('../../assets/myimages/pulsar.jpg'),
      iconName:"musical-notes",
      colors:['#E0DDD2', '#8FB4D4', '#3776A2', '#173053', '#020001']},

      {

      title:"The Walking Dead",
      infoLine:"177 eps · Frank Darabont · 2010",
      descript:"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      mediaTags:['Horror', 'Drama', 'Thriller', 'Psychological'],
      image:require('../../assets/myimages/thewalkingdead.jpg'),
      iconName:"play-circle",
      colors:['#E0DDD2', '#C8BB91', '#554C2F', '#372F11', '#0E0303']},

      {

      title:"Elden Ring",
      infoLine:"Action RPG · FromSoftware · 2022",
      descript:"After the Elden Ring is shattered, an exiled Tarnished returns to the Lands Between, battling demigods and monsters to claim the title of Elden Lord.",
      mediaTags:['Horror', 'Action', 'Adventure', 'Fantasy'],
      image:require('../../assets/myimages/eldenring.jpg'),
      iconName:"game-controller",
      colors:['#E0DDD2', '#FCF9D7', '#4D7061', '#0A393B', '#0C1210']},

  
] as const; 
export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const item = items[index];

  return (
    <MediaCard
      title={item.title}
      infoLine={item.infoLine}
      descript={item.descript}
      mediaTags={item.mediaTags}
      image={item.image}
      iconName={item.iconName}
      colors={item.colors}
      onAnswer={()=>setIndex((index+1)%items.length)}
      />


  );

 
}


