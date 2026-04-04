import React from 'react'
import AdminDashboardCards from '../../Components/AdminDashboardCards/AdminDashboardCards'
import AdminAnalyticsDashboard from '../../Components/AdminAnalyticsDashboard/AdminAnalyticsDashboard'
import DashboardSection from '../../Components/DashboardSection/DashboardSection'
import SocialStats from '../../Components/SocialStats/SocialStats'

const Dashboard = () => {
  return (
    <div>
      <AdminDashboardCards/>
      <AdminAnalyticsDashboard/>
      <DashboardSection/>
      <SocialStats/>
    </div>
  )
}

export default Dashboard