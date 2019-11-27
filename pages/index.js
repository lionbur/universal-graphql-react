import withApollo from 'src/apollo/withApollo'
import Entries from 'src/containers/Entries'

const Index = () => (
  <Entries/>
)

export default withApollo(Index)