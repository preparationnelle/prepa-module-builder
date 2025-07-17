import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Eye, MessageSquare, Star, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeacherLayout from '@/components/teacher/TeacherLayout';

const TeacherCourseAssignmentPage = () => {
  const { courseId, assignmentId } = useParams();
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);
  
  const [assignment] = useState({
    id: assignmentId,
    title: 'DS1 - Algèbre linéaire',
    description: 'Devoir surveillé portant sur les espaces vectoriels, les applications linéaires et les matrices.',
    dueDate: '2024-02-15',
    maxScore: 20,
    instructions: 'Répondez à toutes les questions en justifiant vos réponses. La calculatrice est autorisée.',
    totalSubmissions: 42,
    gradedSubmissions: 40,
    pendingSubmissions: 2
  });

  const [submissions] = useState([
    {
      id: 1,
      studentName: 'Emma Martin',
      studentEmail: 'emma.martin@student.edu',
      submittedAt: '2024-02-14T14:30:00',
      status: 'graded',
      score: 16,
      feedback: 'Excellent travail sur les applications linéaires. Attention aux calculs de déterminants.',
      files: ['emma_martin_ds1.pdf']
    },
    {
      id: 2,
      studentName: 'Lucas Dubois',
      studentEmail: 'lucas.dubois@student.edu',
      submittedAt: '2024-02-15T09:15:00',
      status: 'graded',
      score: 18,
      feedback: 'Très bonne maîtrise du sujet. Raisonnements clairs et justifiés.',
      files: ['lucas_dubois_ds1.pdf']
    },
    {
      id: 3,
      studentName: 'Léa Rousseau',
      studentEmail: 'lea.rousseau@student.edu',
      submittedAt: '2024-02-14T16:45:00',
      status: 'pending',
      score: null,
      feedback: '',
      files: ['lea_rousseau_ds1.pdf']
    },
    {
      id: 4,
      studentName: 'Nathan Moreau',
      studentEmail: 'nathan.moreau@student.edu',
      submittedAt: '2024-02-15T11:30:00',
      status: 'pending',
      score: null,
      feedback: '',
      files: ['nathan_moreau_ds1.pdf']
    }
  ]);

  const getStatusBadge = (status: string) => {
    const colors = {
      graded: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      late: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || colors.pending;
  };

  const getStatusText = (status: string) => {
    const texts = {
      graded: 'Noté',
      pending: 'En attente',
      late: 'En retard'
    };
    return texts[status as keyof typeof texts] || status;
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / assignment.maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
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
            <h1 className="text-3xl font-bold text-foreground">{assignment.title}</h1>
            <p className="text-muted-foreground">{assignment.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Échéance: {new Date(assignment.dueDate).toLocaleDateString('fr-FR')}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Télécharger tout
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Prévisualiser
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total rendus</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignment.totalSubmissions}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Déjà notés</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{assignment.gradedSubmissions}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En attente</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{assignment.pendingSubmissions}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Moyenne</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14.5/{assignment.maxScore}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="submissions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="submissions">Rendus étudiants</TabsTrigger>
            <TabsTrigger value="assignment-details">Détails du devoir</TabsTrigger>
            <TabsTrigger value="grading">Correction</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions" className="space-y-4">
            <div className="grid gap-4">
              {submissions.map((submission) => (
                <Card key={submission.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium">{submission.studentName}</h3>
                          <Badge className={getStatusBadge(submission.status)}>
                            {getStatusText(submission.status)}
                          </Badge>
                          {submission.score !== null && (
                            <span className={`font-medium ${getScoreColor(submission.score)}`}>
                              {submission.score}/{assignment.maxScore}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">{submission.studentEmail}</p>
                        
                        <p className="text-sm text-muted-foreground">
                          Rendu le: {new Date(submission.submittedAt).toLocaleDateString('fr-FR')} à {new Date(submission.submittedAt).toLocaleTimeString('fr-FR')}
                        </p>
                        
                        {submission.feedback && (
                          <div className="mt-3 p-3 bg-muted rounded-md">
                            <p className="text-sm">{submission.feedback}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Voir
                        </Button>
                        
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Télécharger
                        </Button>
                        
                        {submission.status === 'pending' && (
                          <Button size="sm">
                            <Star className="h-4 w-4 mr-1" />
                            Noter
                          </Button>
                        )}
                        
                        {submission.status === 'graded' && (
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Modifier
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignment-details">
            <Card>
              <CardHeader>
                <CardTitle>Détails du devoir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{assignment.description}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Instructions</h3>
                  <p className="text-muted-foreground">{assignment.instructions}</p>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-medium mb-2">Date limite</h3>
                    <p className="text-muted-foreground">
                      {new Date(assignment.dueDate).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Note maximale</h3>
                    <p className="text-muted-foreground">{assignment.maxScore} points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grading">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Barème de notation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Exercice 1 (6 points)</label>
                      <p className="text-xs text-muted-foreground">Espaces vectoriels</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Exercice 2 (8 points)</label>
                      <p className="text-xs text-muted-foreground">Applications linéaires</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Exercice 3 (6 points)</label>
                      <p className="text-xs text-muted-foreground">Matrices et déterminants</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Correction rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Note sur {assignment.maxScore}</label>
                    <Input type="number" placeholder="Note" max={assignment.maxScore} />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Commentaire</label>
                    <Textarea placeholder="Commentaires pour l'étudiant..." rows={4} />
                  </div>
                  
                  <Button className="w-full">
                    Sauvegarder la note
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourseAssignmentPage;