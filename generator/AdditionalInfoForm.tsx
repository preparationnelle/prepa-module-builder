
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export type AdditionalInfo = {
  filiere?: string;
  specialite?: string;
  ecole?: string;
  associatif?: string;
  interets?: string;
  voyages?: string;
  sport?: string;
  trait?: string;
};

type AdditionalInfoFormProps = {
  language: 'fr' | 'en';
  showAdditionalInfo: boolean;
  form: ReturnType<typeof useForm<AdditionalInfo>>;
};

export const AdditionalInfoForm = ({ language, showAdditionalInfo, form }: AdditionalInfoFormProps) => {
  if (!showAdditionalInfo) return null;
  
  return (
    <Card className="mt-4 p-4 bg-accent/30">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-lg">
          {language === 'fr' 
            ? 'Personnalisez votre réponse' 
            : 'Personalize your answer'}
        </CardTitle>
        <CardDescription>
          {language === 'fr'
            ? 'Ces informations seront utilisées pour personnaliser votre réponse'
            : 'This information will be used to personalize your answer'}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="filiere"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Filière' : 'Track'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ECE, ECT, ECG..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specialite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Spécialité' : 'Specialization'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Maths, ESH, Géopolitique..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="ecole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'École visée' : 'Target school'}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="HEC, ESSEC, ESCP..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="trait"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Trait de personnalité principal' : 'Main personality trait'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'fr' 
                        ? "Ex: Je veux tout gérer moi-même" 
                        : "Ex: I want to manage everything myself"} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="associatif"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>
                    {language === 'fr' ? 'Activités associatives' : 'Extracurricular activities'}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={language === 'fr' 
                        ? "Association, responsabilités, projets..." 
                        : "Associations, responsibilities, projects..."} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="interets"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Centres d\'intérêt' : 'Interests'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'fr' 
                        ? "Lecture, musique, théâtre..." 
                        : "Reading, music, theater..."} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="voyages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Voyages / Expériences interculturelles' : 'Travel / Intercultural experiences'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'fr' 
                        ? "Pays visités, échanges..." 
                        : "Countries visited, exchanges..."} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {language === 'fr' ? 'Sports pratiqués' : 'Sports'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={language === 'fr' 
                        ? "Niveau, compétition, équipe..." 
                        : "Level, competition, team..."} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};
