function About() {
  return (
    <div style={{ 
      backgroundColor: '#3498db', 
      color: 'white', 
      fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease-in-out',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}>
      <h1 style={{marginTop: '0px', borderBottom: '3px solid white', paddingBottom: '30px', paddingTop: '10px' }}>About Our Company</h1>
      
      <section style={{ marginBottom: '0px' }}>
        <h2 style={{color: '#2C3E50'}}>Our Story</h2>
        <p style= {{margin: '0px 500px 0px 500px'}}>Founded in 1990, our company has been at the forefront of innovation and excellence. With over three decades of experience, we've consistently delivered cutting-edge solutions across technology, marketing, and consultancy sectors.</p>
      </section>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{color: '#2C3E50'}}>Our Mission</h2>
        <p style= {{margin: '0px 500px 0px 500px'}}>We are committed to empowering businesses through innovative strategies, transformative technologies, and strategic consulting. Our goal is to help our clients achieve sustainable growth and competitive advantage in an ever-changing global marketplace.</p>
      </section>
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{color: '#2C3E50'}}>Our Team</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{ textAlign: 'center', width: '30%', backgroundColor: 'white', padding: '10px', borderRadius: '8px', color: '#34495e', margin: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}>
              <img src={member.image} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 style={{color: '#2C3E50'}}>Our Values</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {values.map((value, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{value}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://maxm-imggenurl.web.val.run/professional-woman-ceo',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://maxm-imggenurl.web.val.run/professional-man-cto',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Marketing Officer',
    image: 'https://maxm-imggenurl.web.val.run/professional-woman-cmo',
  },
];

const values = [
  '🚀 Innovation: Constantly pushing boundaries',
  '🤝 Integrity: Transparent and ethical business practices',
  '💡 Excellence: Delivering high-quality solutions',
  '🌍 Sustainability: Committed to social and environmental responsibility',
];



export default About;
