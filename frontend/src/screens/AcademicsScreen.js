import { Alert, Container } from 'react-bootstrap'
const AcademicsScreen = () => {
  // this useEffect fetches data about departmentName, disciplinesName and contactPerson for each department

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Academics &amp; Beyond
      </Alert>
      <Container>
        <div className='academics'>
          <div>
            The Faculty of Engineering and Technology has a thriving atmosphere
            in its environment. We invest our energies heavily in academic
            rigour, career development and campus engagement. Our students have
            the eagerness to learn and ameliorate their skills with practical
            application. The Faculty offers courses like Bachelor of Technology,
            Bachelor of Computer Applications and Master of Computer
            Applications.
          </div>
          <div className='pt-3'>
            <div className='font-weight-bolder '>
              B.Tech. (Bachelor of Technology)
            </div>
            <ul>
              <li>
                Students admitted through UPSEE(Uttar Pradesh State Engineering
                Exam)
              </li>
              <li>Comprises of 8 semesters of academic curriculum</li>
              <li>
                The journey of an undergrad students begins with foundation
                course common to all students providing a stong base of general
                education Mathematics, Physics, Chemistry, Engineering Drawing,
                Humanities and Social Sciences. In subsequent semesters,
                students pursue core departmental courses to gain an in-depth
                knowledge of their specialization.
              </li>
            </ul>
          </div>

          <div className='pt-3'>
            <div className='font-weight-bolder '>
              BCA (Bachelors of Computer Application)
            </div>
            <ul>
              <li>Students admitted through Lucknow University Entrace Exam</li>
              <li>Comprises of 6 semesters of academic curriculum</li>
            </ul>
          </div>

          <div className='pt-3'>
            <div className='font-weight-bolder '>
              MCA (Masters of Computer Application)
            </div>
            <ul>
              <li>Students admitted through Lucknow University Entrace Exam</li>
              <li>Comprises of 4 semesters of academic curriculum</li>
            </ul>
          </div>
        </div>
        <div className='beyond-academics'>
          <h2 className='text-center'>Beyond Academics</h2>
          <h5>Councils and Societies</h5>
          <p>
            Developing student leadership and creative capital is a crucial
            aspect of the Faculty. We have many societies which help students in
            honing their talents outside the classroom. These recreational
            opportunities also provide a space for students to learn social and
            cultural awareness for their holistic development. The Faculty
            believes in conversation and collaboration and hence has an active
            culture of upholding creative values.
          </p>
          <p>
            We have a <b>Council of Student Activities</b>, which actively
            organises events to help diversify the interests of the students and
            overlooks the entire gamut of extracurricular activities.
          </p>
          <p>
            We also have a <b>Technical Council</b> that seeks to empower our
            students through strategic initiatives which uses technology. The
            council oragnises gaming and coding events etc, to enhance technical
            creativity of our students.
          </p>
          <p>
            Our <b>Sports Council</b> keeps supporting activities for the
            students within its purview. The council recognises how sports has
            an interplay with community and helps students to foster feelings of
            mutual respect. The council organises events around the year which
            include but are not limited to Badminton, Table Tennis, Carrom,
            Cricket etc.
          </p>
          <p>
            Our <b>Cultural Council</b> and{' '}
            <b>Fine Arts &amp; Photography Council</b> help our students to
            become more creative and open-minded. These are vibrant spaces which
            help the passions of our students flourish and help them to elevate
            day-to-day experience into art forms.
          </p>
          <p>
            We also have a <b>Literary Society</b> which offers a diverse
            landscape to our students. <b>EnLit</b>, the literary society of the
            Faculty is a thriving space for intellectual development. It also
            promotes reading habits, a flair for language and teaches students
            nuances of debating.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AcademicsScreen
