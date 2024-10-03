import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Home/footer'
import '../Home/footer.css';
import './dashboard.css';

function Dashboard()
{
    const navigate = useNavigate();
    return(
        <>
        <div className="dashboard-container">
      {/* User Info Section */}
      <div className="user-info-section">
        <button className="home-btn"  onClick={() =>navigate('/')}>Home</button>
        <div className="user-avatar">
          {/* Placeholder for user avatar */}
        </div>
        <div className="user-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Date of Birth:</strong> 01/01/1990</p>
        </div>
        <div className="user-stats">
          <p><strong>Total Interviews Given:</strong> 5</p>
          <p><strong>Domains Attempted:</strong> Algorithms, Web Development</p>
        </div>
        <div className="user-data-btn">User data if needed</div>
        <button className="logout-btn"  onClick={() =>navigate('/login')}>Logout</button>
      </div>

      {/* Main Section (Interview Table & About User Side by Side) */}
      <div className="main-section">
        {/* Interview Table Section */}
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Domain</th>
                <th>Total Questions</th>
                <th>Analysis Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01/02/2023</td>
                <td>Algorithms</td>
                <td>10</td>
                <td><button onClick={() => navigate('/')} style={{width:'150px',height:'60px',backgroundColor:'#c8c8c8',border:'5px solid black',fontSize:'16px',fontWeight:600, color:'black'}}>View Analysis</button></td>
              </tr>
              <tr>
                <td>05/02/2023</td>
                <td>Web Development</td>
                <td>8</td>
                <td><button onClick={() => navigate('/')} style={{width:'150px',height:'60px',backgroundColor:'#c8c8c8',border:'5px solid black',fontSize:'16px',fontWeight:600, color:'black'}}>View Analysis</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* About User Section */}
        <div className="about-user-section">
          <h3>About User</h3>
          <p><strong>Graduated Stream:</strong> Computer Science</p>
          <p><strong>Year of Graduation:</strong> 2020</p>
          <p><strong>Email ID:</strong> johndoe@example.com</p>
          <p><strong>Bio:</strong> Passionate software engineer with a focus on full-stack development.</p>
        </div>
      </div>
    </div>
        <Footer/>
        </>

    )
}
export default Dashboard;