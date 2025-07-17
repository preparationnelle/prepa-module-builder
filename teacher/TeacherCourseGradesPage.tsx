import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Upload, Plus, Search, Filter, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeacherLayout from '@/components/teacher/TeacherLayout';

const TeacherCourseGradesPage = () => {
  const { courseId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [assignments] = useState([
    {
      id: 1,
      title: 'DS1 - Algèbre linéaire',
      type: 'exam',
      maxScore: 20,
      submissions: 42,
      graded: 40,
      avgScore: 14.5
    },
    {
      id: 2,
      title: 'Exercices pratiques - Matrices',
      type: 'homework',
      maxScore: 10,
      submissions: 45,
      graded: 45,
      avgScore: 8.2
    },
    {
      id: 3,
      title: 'Projet final - Analyse de données',
      type: 'project',
      maxScore: 20,
      submissions: 12,
      graded: 5,
      avgScore: 16.8
    }
  ]);

  const [grades] = useState([
    {
      id: 1,
      studentName: 'Emma Martin',
      studentEmail: 'emma.martin@student.edu',
      grades: {
        1: { score: 16, maxScore: 20, status: 'graded' },
        2: { score: 9, maxScore: 10, status: 'graded' },
        3: { score: null, maxScore: 20, status: 'pending' }
      },
      average: 15.5
    },
    {
      id: 2,
      studentName: 'Lucas Dubois',
      studentEmail: 'lucas.dubois@student.edu',
      grades: {
        1: { score: 18, maxScore: 20, status: 'graded' },
        2: { score: 8.5, maxScore: 10, status: 'graded' },
        3: { score: 18, maxScore: 20, status: 'graded' }
      },
      average: 16.8
    },
    {
      id: 3,
      studentName: 'Léa Rousseau',
      studentEmail: 'lea.rousseau@student.edu',
      grades: {
        1: { score: 12, maxScore: 20, status: 'graded' },
        2: { score: 7, maxScore: 10, status: 'graded' },
        3: { score: null, maxScore: 20, status: 'not_submitted' }
      },
      average: 12.7
    }
  ]);

  const filteredGrades = grades.filter(grade =>
    grade.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grade.studentEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGradeColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      graded: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      not_submitted: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || colors.pending;
  };

  const getStatusText = (status: string) => {
    const texts = {
      graded: 'Noté',
      pending: 'En attente',
      not_submitted: 'Non rendu'
    };
    return texts[status as keyof typeof texts] || status;
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
            <h1 className="text-3xl font-bold text-foreground">Gestion des notes</h1>
            <p className="text-muted-foreground">Consultez et gérez les notes de votre cours</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Importer
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nouveau devoir
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Devoirs totaux</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignments.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notes en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {assignments.reduce((acc, a) => acc + (a.submissions - a.graded), 0)}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Moyenne générale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(grades.reduce((acc, g) => acc + g.average, 0) / grades.length * 10) / 10}/20
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de réussite</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {Math.round((grades.filter(g => g.average >= 10).length / grades.length) * 100)}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="grades" className="space-y-4">
          <TabsList>
            <TabsTrigger value="grades">Tableau des notes</TabsTrigger>
            <TabsTrigger value="assignments">Gestion des devoirs</TabsTrigger>
            <TabsTrigger value="statistics">Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="grades" className="space-y-4">
            {/* Search */}
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

            {/* Grades Table */}
            <Card>
              <CardHeader>
                <CardTitle>Notes par étudiant</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Étudiant</TableHead>
                      {assignments.map((assignment) => (
                        <TableHead key={assignment.id} className="text-center">
                          {assignment.title}
                          <div className="text-xs text-muted-foreground">
                            /{assignment.maxScore}
                          </div>
                        </TableHead>
                      ))}
                      <TableHead className="text-center">Moyenne</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredGrades.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{student.studentName}</div>
                            <div className="text-xs text-muted-foreground">{student.studentEmail}</div>
                          </div>
                        </TableCell>
                        {assignments.map((assignment) => {
                          const grade = student.grades[assignment.id as keyof typeof student.grades];
                          return (
                            <TableCell key={assignment.id} className="text-center">
                              {grade?.score !== null && grade?.score !== undefined ? (
                                <span className={getGradeColor(grade.score, grade.maxScore)}>
                                  {grade.score}/{grade.maxScore}
                                </span>
                              ) : (
                                <Badge className={getStatusBadge(grade?.status || 'pending')}>
                                  {getStatusText(grade?.status || 'pending')}
                                </Badge>
                              )}
                            </TableCell>
                          );
                        })}
                        <TableCell className="text-center">
                          <span className={getGradeColor(student.average, 20)}>
                            {student.average}/20
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card>
              <CardHeader>
                <CardTitle>Devoirs et évaluations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {assignment.submissions} rendus • {assignment.graded} notés • Moyenne: {assignment.avgScore}/{assignment.maxScore}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Voir les copies
                        </Button>
                        <Button size="sm">
                          Corriger
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Répartition des notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Excellent (16-20)</span>
                      <span className="text-green-600">25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bien (14-16)</span>
                      <span className="text-blue-600">35%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Assez bien (12-14)</span>
                      <span className="text-yellow-600">25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Passable (10-12)</span>
                      <span className="text-orange-600">10%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insuffisant (&lt;10)</span>
                      <span className="text-red-600">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Évolution des moyennes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Graphique d'évolution des moyennes par devoir à venir...
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourseGradesPage;