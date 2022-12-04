import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Vishal from './images/Vishal.jpg'

const AboutUs = ()=>{
    return (
        <div className='p-3 container'>
            <h1>About Us Page</h1>
            <Row>
                    <Col md={6}>
                    <Image className='shadow-lg p-3 mb-5 bg-dark rounded img-fluid mt-4'
                            src=
                            {Vishal}
                        />
                    </Col>
                    <Col md={6}>
                        <div className='text-start p-5'>
                        <h1>Hello!</h1>
                        <h1>I'm Vishal Chaubey</h1>
                        <h3 className='text-muted'>( ITdude )</h3>
                        <p className=' text-end p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem repellat quo modi ipsum quisquam labore reprehenderit, officiis suscipit, quaerat laudantium dolore. Tempora, expedita, mollitia commodi voluptas nostrum repudiandae at nobis impedit laudantium hic in, ullam quibusdam obcaecati delectus ratione excepturi quas! A odit enim iusto dolore debitis nobis sint non sapiente. Facere reiciendis cupiditate cum rerum provident eius, laboriosam, culpa, non maxime esse blanditiis ad. Voluptate nihil eius aut suscipit nisi sequi numquam molestias saepe nulla.</p>
                        </div>
                    </Col>
            </Row>

        </div>
    )
}
export default AboutUs;