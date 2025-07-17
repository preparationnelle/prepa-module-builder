import React from 'react';
import TeacherLayout from '@/components/teacher/TeacherLayout';
import DashboardStats from '@/components/teacher/dashboard/DashboardStats';
import ActivityChart from '@/components/teacher/dashboard/ActivityChart';
import ModuleProgress from '@/components/teacher/dashboard/ModuleProgress';
import RecentActivity from '@/components/teacher/dashboard/RecentActivity';

const TeacherDashboardPage: React.FC = () => {
  return (
    <TeacherLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Vue d'ensemble de l'activité de la plateforme et des progrès des étudiants
          </p>
        </div>

        {/* Statistics Cards */}
        <DashboardStats />

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <ActivityChart />
          <ModuleProgress />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </TeacherLayout>
  );
};

export default TeacherDashboardPage;