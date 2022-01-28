import ProfileComp from "../../components/ProfileComp"
import Navigation from "../../components/Navigation"
import './Profile.css'

const Profilepage = () => {
  return (
    <>
    <Navigation />
      <section className="background">
      <ProfileComp/>
    </section>
      </>
    )}

export default Profilepage
