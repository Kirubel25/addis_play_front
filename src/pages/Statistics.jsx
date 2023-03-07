import GenerStatstics from "../components/statistics/generStatistics/generStatistics"
import ArtistsStatstics from "../components/statistics/artistStatistics/ArtistsStatstics"
import AlbumStatstics from "../components/statistics/albumStatistics/AlbumStatstics"
import TotalStatstics from "../components/statistics/totalStatistics/TotalStatstics"

const Statistics = () => {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr" , gap:"10px"}}>
        <TotalStatstics/>
       <ArtistsStatstics/>
       <AlbumStatstics/>
       <GenerStatstics/>

       </div>
  )
}

export default Statistics