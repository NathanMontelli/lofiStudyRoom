import WelcomeBadge from "../../components/WelcomeBadge"
import Navigation from "../../components/Navigation"
import TextEditor from "../../components/TextEditor"
import './Profile.css'

const Profilepage = () => {
  return (
    <>
    <Navigation />
      <section className="background">
        <WelcomeBadge />
        <TextEditor />
    </section>
      </>
    )}

export default Profilepage
