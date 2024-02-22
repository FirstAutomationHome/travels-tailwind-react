import Home from './Home'
import Recommends from './Recommends'
import ImportantsRents from './ImportantsRents'
import Faqs from './Faqs'
import FooterSection from './FooterSection'
import LineDecorative from './LineDecorative'

function Section () {
    return(
        <section className='w-full h-screen'>
            <Home />
            <Recommends />
            <ImportantsRents />           
            <Faqs />           
            <LineDecorative />                       
            <FooterSection />
        </section>
    )
}
export default Section