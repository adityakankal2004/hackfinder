import React, {useEffect,useState} from 'react';
import {fetchHackathons} from './services/hackathonService';
import Hackathon from '../components/HackathonCard';

export default function Home(){
  const [list,setList] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetchHackathons().then(data=> setList(data)).catch(console.error).finally(()=> setLoading(false));
  },[]);
  return (
  <div>
    <h1 className="text-2xl font-bold mb-4">Upcoming Hackathons</h1>
      {loading ? <p>Loading...</p> : (
      {list.map(h => <HackathonCard key={h._id} hack={h} />)}
      </div>
      )}
    </div>
  )
}
