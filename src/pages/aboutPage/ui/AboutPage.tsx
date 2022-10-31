import { Counter } from "entities/Counter"
import { LoaderPage } from "widgets/LoaderPage"

const AboutPage = () => (
  <div style={{height:"800px", display:"flex", justifyContent:"center", alignItems:"center"}}>
    {/* <LoaderPage /> */}
    <Counter/>
  </div>
)

export default AboutPage