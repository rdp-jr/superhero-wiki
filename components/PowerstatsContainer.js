
import PowerBar from './PowerBar'

const PowerstatsContainer = ({stats}) => {
  console.log(stats)

  const statNames = Object.keys(stats)

  return (
    <div class="d-flex flex-column">
      {Object.keys(stats).map((key, index) => 
        (
        <PowerBar name={statNames[index]} 
                    percent={stats[key]}
                    key={Math.random()}
                    width={500}
                    />
        ))}
        
    </div>
  )
}

export default PowerstatsContainer
