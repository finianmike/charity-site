import React from 'react'
import './Home.css'
import nwabueze from '../../assets/Banners/nwabueze.JPG'
import ogede from '../../assets/Banners/ogede.JPG'
import brand from '../../assets/Banners/brand.JPG'
import { Header } from '../Header/Header'
// import vision from '../../assets/Banners/vision.PNG'
// import mission from '../../assets/Banners/mission.JPG'

const Home = () => {
  return (
    <div>
        
    <div className='about'>
        <h1>
            About Slum Child
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Rem facilis amet aliquid! Necessitatibus, beatae! Optio quas 
        commodi nisi nobis. Autem, maxime quia laudantium id rerum aut 
        explicabo doloremque odit obcaecati atque, deleniti architecto 
        sed! Nisi omnis delectus animi quidem deleniti nemo velit ullam, 
        repellendus possimus nesciunt amet ducimus dolorem doloribus error 
        incidunt accusantium ex at. Dolor alias recusandae, quibusdam velit 
        quae maxime quas voluptates, doloribus dolore, consequuntur nam. 
        Eligendi eos iste consectetur ducimus debitis dolor commodi placeat 
        accusantium mollitia! Quos eveniet, accusantium odio reprehenderit 
        beatae ullam iste sequi unde dolorum! Laborum voluptates eligendi 
        assumenda debitis aperiam odio omnis id nulla.

        </p>
    </div>
    <div className='statement'>
    <div className='mission1'>
        {/* <img src={mission} /> */}
        <h3>Our Mission</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veritatis reiciendis magni, similique accusantium dicta veniam 
            exercitationem aspernatur consequuntur impedit molestiae? Aliquam, 
            fugiat. Doloremque iure deserunt ipsa sint optio, pariatur natus, 
            quos odit culpa, quas consectetur distinctio fuga praesentium. 
            Nemo dignissimos placeat laborum, 
            unde exercitationem omnis corrupti explicabo doloribus repudiandae cum.
        </p>
    </div>
    <div className='mission1'>
        {/* <img src={vision} alt='vision' /> */}
        <h3>Our Vision</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veritatis reiciendis magni, similique accusantium dicta veniam 
            exercitationem aspernatur consequuntur impedit molestiae? Aliquam, 
            fugiat. Doloremque iure deserunt ipsa sint optio, pariatur natus, 
            quos odit culpa, quas consectetur distinctio fuga praesentium. 
            Nemo dignissimos placeat laborum, 
            unde exercitationem omnis corrupti explicabo doloribus repudiandae cum.
        </p>
    </div>
    </div>
    <div class="advise-side">
<div>
    <h1>Get in touch to discuss our <en>Ophanage homes</en></h1>
    <p>our friendly advisors are here to answer any questions you may have about residential care.<br />
        call us on 08063342717 for a no obligation chat or use our simple enquiry form to request a call back
        from on of the team.
    </p>
</div>
<div className='advise-text'>
    <div class="advisors">
    <div>
    <img src={nwabueze} alt="advisor1" />
    <h5><en>Clair pnoik</en></h5>
    <p>care solution advisor</p>
</div>
<div>
    <img src={ogede} alt="advisor2" />
    <h5><en>Clair pnoik</en></h5>
    <p>Care solution advisor</p>
</div>
<div>
    <img src={brand} alt="advisor3" />
    <h5><en>Clair pnoik</en></h5>
    <p>Care solution advisor</p>
</div>

    </div>
    <div className='enquire-area'>
<div>
<label for="name">Name</label><br />
<input type="text" id="name"  /><br />
</div>
<div>
<label for="phone-number">Phone number</label><br />
<input type="number" id="phone-number"/><br/>
</div>
<div>
<label for="message">Message</label><br />
<textarea type="text" id="message"></textarea><br/><br/>
</div>
<button type="submit" value="submit">Submit</button>
<div>
    <h4> Feel free to contact any of our Advisers, our office lines are toll free</h4>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home