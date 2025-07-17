import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Plus, Mail, UserPlus, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TeacherLayout from '@/components/teacher/TeacherLayout';

const TeacherCourseStudentsPage = () => {
  const { courseId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [students] = useState([
    {
      id: 1,
      firstName: 'Emma',
      lastName: 'Martin',
      email: 'emma.martin@student.edu',
      enrollmentDate: '2024-01-10',
      lastActivity: '2024-01-16',
      progress: 85,
      status: 'active'
    },
    {
      id: 2,
      firstName: 'Lucas',
      lastName: 'Dubois',
      email: 'lucas.dubois@student.edu',
      enrollmentDate: '2024-01-10',
      lastActivity: '2024-01-15',
      progress: 92,
      status: 'active'
    },
    {
      id: 3,
      firstName: 'Léa',
      lastName: 'Rousseau',
      email: 'lea.rousseau@student.edu',
      enrollmentDate: '2024-01-12',
      lastActivity: '2024-01-14',
      progress: 78,
      status: 'active'
    },
    {
      id: 4,
      firstName: 'Nathan',
      lastName: 'Moreau',
      email: 'nathan.moreau@student.edu',
      enrollmentDate: '2024-01-08',
      lastActivity: '2024-01-10',
      progress: 45,
      status: 'inactive'
    },
    {
      id: 5,
      firstName: 'Chloé',
      lastName: 'Leroy',
      email: 'chloe.leroy@student.edu',
      enrollmentDate: '2024-01-15',
      lastActivity: '2024-01-16',
      progress: 67,
      status: 'active'
    }
  ]);

  const filteredStudents = students.filter(student =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800';
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <TeacherLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to={`/prof/courses/${courseId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au cours
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Étudiants inscrits</h1>
            <p className="text-muted-foreground">Gérez les étudiants de votre cours</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Ajouter un étudiant
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total étudiants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{students.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Actifs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {students.filter(s => s.status === 'active').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progression moyenne</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nouveaux cette semaine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher un étudiant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtres
          </Button>
        </div>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des étudiants ({filteredStudents.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Étudiant</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Inscription</TableHead>
                  <TableHead>Dernière activité</TableHead>
                  <TableHead>Progression</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {getInitials(student.firstName, student.lastName)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {student.firstName} {student.lastName}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>
                      {new Date(student.enrollmentDate).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell>
                      {new Date(student.lastActivity).toLocaleDateString('fr-FR')}
                    </TableCell>
                    <TableCell>
                      <span className={getProgressColor(student.progress)}>
                        {student.progress}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(student.status)}>
                        {student.status === 'active' ? 'Actif' : 'Inactif'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Détails
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourseStudentsPage;