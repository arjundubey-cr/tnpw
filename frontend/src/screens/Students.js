import { Alert, Container, Image } from 'react-bootstrap'
import internorg from '../assets/images/internorg.jpeg'
const Students = () => {
  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Our Students
      </Alert>
      <Container>
        <div>
          <p>
            Our students offer you a talented and keen-eyed pool of prospective
            employees, who will be an asset to your organisation. The Faculty
            Engineering and Technology offer its students a stimulating and
            challenging learning experience which focuses on making our students
            the leaders of tomorrow.
          </p>
          <p>
            The Faculty is an integral part of University of Lucknow, which is a
            100 year old institution of eminence. Our students have learnt from
            highly qualified faculty and also honed their expertise and skills
            in extra-curricular and co-curricular activities.
            <br />
            Students take part in Internships/Training in department specific or
            non- departmental industry. Apart from this, various industry visits
            and training sessions are organized for the students which gives
            them a holistic view of education and make them globally-minded
            leaders.
            <br />
          </p>
        </div>

        <div className='pt-4'>
          <h2 className='text-center'>Training Methodologies</h2>
          <p>
            We can prodly say that 100% of studenst enrolled in 3rd Year have
            successfully completed summer Internships/Industrial Trainings to
            make them industry ready for the future.
            <br />
            The above data clearly illustrates that the methodology employed by
            the Training and Placement Cell has been effective in garnering
            results.
          </p>
        </div>

        <div className='pt-4'>
          <h2 className='text-center'>Internships</h2>
          <p>
            Our students have been placed in summer internships to make them
            bussiness-ready and hone their industry expertise. These internships
            are invaluable in the broadening of skill-sets, acumen and outlook
            of our students. Training and Placement Cell has provided assistance
            at every step, including providing details of internship
            oppurtunities, company links etc. to our students. Some of the
            notable companies where our third year students have interned
            include, but are not limited to:
          </p>
          <Image
            src={internorg}
            className='d-block mr-auto ml-auto w-75'></Image>
        </div>
      </Container>
    </div>
  )
}

export default Students
